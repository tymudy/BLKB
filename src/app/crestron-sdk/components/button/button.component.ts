import { Component, 
         Input,
         OnInit,
         ViewEncapsulation } from '@angular/core';

@Component({
    selector:'btn',
    templateUrl:'./button.component.html',
    styleUrls:['./button.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

    @Input('name') name : string;
    @Input('customClass') customClass: string;
    @Input('label') label : string;
    @Input('icon') icon : string;
    @Input('icon_align') icon_align: string;
    @Input('shape') shape: string;
    @Input('type') type: string;
    @Input('size') size: string;
    @Input('stretch') stretch: string;
    @Input('orientation') orientation: string;

    isDisplayIconLeft: boolean;
    isDisplayIconRight: boolean;

    rotate_icon: string;

    ngOnInit (): void {
        this.setPropertiesValueIfUndefined();
        this.setIconAndLabelAlignPosition();
        this.setIconRotation();
        this.setButtonSize();
    }

    setPropertiesValueIfUndefined(): void {
        if(!this.name){
            this.name = '';
        }
        if(!this.customClass){
            this.customClass = '';
        }
        if(!this.orientation){
            this.orientation='';
        }
        if(!this.label){
            this.label = 'Button';
        }
        if(!this.icon_align){
            this.icon_align = 'right'; 
        }
        if(!this.shape){
            this.shape = 'rounded-rectangle';
        }
        if(!this.type){
            this.type = '';
        }
    }

    setIconAndLabelAlignPosition(): void {
        if(this.icon){
            if ( (this.icon_align.match(/^right$/) == null) &&
                 (this.icon_align.match(/^left$/) == null) ){
                this.isDisplayIconRight = true;
                this.isDisplayIconLeft = false;
            }else{
                if (this.icon_align.indexOf('right') >= 0){
                    this.isDisplayIconRight = true;
                    this.isDisplayIconLeft = false;
                } else if (this.icon_align.indexOf('left') >= 0) {
                    this.isDisplayIconLeft = true;
                    this.isDisplayIconRight = false;
                } 
            }
        }
    }

    setIconRotation(): void {
        if ( this.orientation.match(/^vertical$/) != null ){
            this.rotate_icon = 'rotate';
        }
    }

    //if stretch and size are set, size will be deprecated
    //if stretch is set, it will be deprecated for circle and oval shapes
    setButtonSize() : void {
        if(this.stretch){
            if( (this.shape.match(/^circle$/) != null ) &&
                (this.shape.match(/^oval$/) != null) ){
                    this.stretch = '';
            }else{
                    this.size = '';
                    this.stretch = "stretch_" + this.stretch;
            }
        }else{
            switch(this.size){
                case "x-small": {
                    this.size = "btn-xs";
                    break;
                }
                case "small": {
                    this.size = "btn-sm";
                    break;
                }
                case "regular": {
                    this.size = "btn-sm";
                    break;
                }
                case "large" || "x-large" : {
                    this.size = "btn-lg";
                    break;
                }
                default: this.size = '';
            }
            this.stretch = '';
        }
    }
}