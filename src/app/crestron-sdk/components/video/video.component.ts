import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {Chunk} from './Chunk';
import {WindowRefService} from './WindowRefService';

// const async = require('async');
const async: any = null;

declare var CrestronVideo: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnDestroy {

  @ViewChild('video') video: any;

  mediaSource: MediaSource;
  sourceBuffer: SourceBuffer;

  window: Window;
  src: any;

  chunks: Chunk[];

  constructor(private domSanitizer: DomSanitizer) {
    this.window = WindowRefService.nativeWindow;
    this.mediaSource = new MediaSource;
    this.chunks = [];
  }

  ngOnInit(): void {

    console.log(CrestronVideo);

    let objectURL = this.window.URL.createObjectURL(this.mediaSource);
    this.src = this.domSanitizer.bypassSecurityTrustResourceUrl(objectURL);

    CrestronVideo.webUI.send.action.start();
    CrestronVideo.webUI.subscribe.data.stream(this.stream, null);

    let context = this;
    this.mediaSource.addEventListener('sourceopen', function () {

      console.log('sourceopen');
      context.initializeSourceBuffer();

      context.sourceBuffer.addEventListener('updateend', function () {
        console.log('updateend');
        context.video.nativeElement.play();

        let previousChunkIndex = context.chunks.length - 1;
        CrestronVideo.webUI.send.action.sendNextChunk(previousChunkIndex);
      });
    });
  }

  ngOnDestroy(): void {
    CrestronVideo.webUI.send.action.stop();
    CrestronVideo.webUI.unsubscribe.data.stream();
  }

  initializeSourceBuffer(): void {

    if (this.mediaSource.sourceBuffers.length === 0) {
      this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="vorbis,vp8"');
      console.log('initialized source buffer');
    }
  }

  stream(id: number, bytes: any): void {

    let context = this;

    async.waterfall([
      validateData,
      addSourceBuffer,
      buildChunk,
      append
    ], function (err: any) {
      if (err) {
        console.log(err);
      } else {
        console.log('main callback in the stream method for chunk #' + id);
      }
    });

    function validateData(callback: any): void {

      console.log('validating chunk #' + id);

      if (bytes === null) {
        callback('received an empty chunk');
      } else {
        callback(null);
      }
    }

    function addSourceBuffer(callback: any): void {
      context.initializeSourceBuffer();
      callback(null);
    }

    function buildChunk(callback: any): void {

      console.log('building chunk #' + id);

      let chunk = new Chunk(bytes, id);
      context.chunks.push(chunk);
      callback(null, chunk);
    }

    function append(chunk: Chunk, callback: any): void {

      try {
        context.sourceBuffer.appendBuffer(chunk.data);

        console.log('appending chunk #' + chunk.id + ' to buffer');
        console.log('sourceBuffer.updating = ' + context.sourceBuffer.updating);
      } catch (e) {
        if (e.name === 'QuotaExceededError') {
          console.log('QuotaExceededError: source buffer is full, can not append any more chunks atm');
        } else if (e.name === 'InvalidStateError') {
          console.log('InvalidStateError:\nmediaSource.readyState = ' + context.mediaSource.readyState +
            '\nsourceBuffer.updating = ' + context.sourceBuffer.updating);
        } else {
          console.log(e.name);
        }
      }

      callback(null, 'done');
    }
  }
}
