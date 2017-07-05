var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Chunk } from './Chunk';
import { WindowRefService } from './WindowRefService';
// const async = require('async');
var async = null;
var VideoComponent = (function () {
    function VideoComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.window = WindowRefService.nativeWindow;
        this.mediaSource = new MediaSource;
        this.chunks = [];
    }
    VideoComponent.prototype.ngOnInit = function () {
        console.log(CrestronVideo);
        var objectURL = this.window.URL.createObjectURL(this.mediaSource);
        this.src = this.domSanitizer.bypassSecurityTrustResourceUrl(objectURL);
        CrestronVideo.webUI.send.action.start();
        CrestronVideo.webUI.subscribe.data.stream(this.stream, null);
        var context = this;
        this.mediaSource.addEventListener('sourceopen', function () {
            console.log('sourceopen');
            context.initializeSourceBuffer();
            context.sourceBuffer.addEventListener('updateend', function () {
                console.log('updateend');
                context.video.nativeElement.play();
                var previousChunkIndex = context.chunks.length - 1;
                CrestronVideo.webUI.send.action.sendNextChunk(previousChunkIndex);
            });
        });
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        CrestronVideo.webUI.send.action.stop();
        CrestronVideo.webUI.unsubscribe.data.stream();
    };
    VideoComponent.prototype.initializeSourceBuffer = function () {
        if (this.mediaSource.sourceBuffers.length === 0) {
            this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="vorbis,vp8"');
            console.log('initialized source buffer');
        }
    };
    VideoComponent.prototype.stream = function (id, bytes) {
        var context = this;
        async.waterfall([
            validateData,
            addSourceBuffer,
            buildChunk,
            append
        ], function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('main callback in the stream method for chunk #' + id);
            }
        });
        function validateData(callback) {
            console.log('validating chunk #' + id);
            if (bytes === null) {
                callback('received an empty chunk');
            }
            else {
                callback(null);
            }
        }
        function addSourceBuffer(callback) {
            context.initializeSourceBuffer();
            callback(null);
        }
        function buildChunk(callback) {
            console.log('building chunk #' + id);
            var chunk = new Chunk(bytes, id);
            context.chunks.push(chunk);
            callback(null, chunk);
        }
        function append(chunk, callback) {
            try {
                context.sourceBuffer.appendBuffer(chunk.data);
                console.log('appending chunk #' + chunk.id + ' to buffer');
                console.log('sourceBuffer.updating = ' + context.sourceBuffer.updating);
            }
            catch (e) {
                if (e.name === 'QuotaExceededError') {
                    console.log('QuotaExceededError: source buffer is full, can not append any more chunks atm');
                }
                else if (e.name === 'InvalidStateError') {
                    console.log('InvalidStateError:\nmediaSource.readyState = ' + context.mediaSource.readyState +
                        '\nsourceBuffer.updating = ' + context.sourceBuffer.updating);
                }
                else {
                    console.log(e.name);
                }
            }
            callback(null, 'done');
        }
    };
    __decorate([
        ViewChild('video'),
        __metadata("design:type", Object)
    ], VideoComponent.prototype, "video", void 0);
    VideoComponent = __decorate([
        Component({
            selector: 'app-video',
            templateUrl: './video.component.html',
            styleUrls: ['./video.component.css']
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], VideoComponent);
    return VideoComponent;
}());
export { VideoComponent };
//# sourceMappingURL=video.component.js.map