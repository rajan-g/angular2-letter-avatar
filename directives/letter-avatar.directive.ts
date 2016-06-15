import {Component, ElementRef, Input, Output, OnInit, ChangeDetectionStrategy, OnChanges} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser'


@Component({
    selector: 'avatar',
    template: `      
<!--<img style="background: {{background}}" src="{{letterSrc}}" /> 
<canvas width="100" height="100" >
Your browser does not support the HTML5 canvas tag.</canvas>\n\-->
<div style="text-align:center;border-radius:50%;width:{{size}}px ;height:{{size}}px; background:{{background}};border: {{border}}">
<div style="padding-top: {{padding}}px;font-size: {{fontSize}}px;color:#fff">{{letter}}</div>
</div>
`,
    providers: [BrowserDomAdapter],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class LetterAvatarDirective implements OnInit, OnChanges {
    @Input('avatardata') avatarData: any;
    letterSrc: any;
    background: any;
    fontSize: any;
    padding: any;
    letter: any;
    size: any;
    border: any;
    canvas: any;
    private _el: HTMLElement;

    constructor(el: ElementRef, private dom: BrowserDomAdapter) {
        this._el = el.nativeElement;
    }

    generateLetter() {
        if (!this.avatarData) {
            throw Error("LetterAvatarDirective configdata not provides");
        }
        if (!this.avatarData.text) {
//            throw Error("LetterAvatarDirective configdata text missing");
            console.log("LetterAvatarDirective configdata text missing");
            this.avatarData.text = '?';
        }
        var size = this.avatarData && this.avatarData.size ? this.avatarData.size : 100;
        var fontColor = this.avatarData.fontColor ? this.avatarData.fontColor : "#FFFFFF";
        var isSquare = this.avatarData && this.avatarData.isSquare ? true : false;
        var border = this.avatarData && this.avatarData.border ? this.avatarData.border : "1px solid #d3d3d3";
        var background = this.avatarData && this.avatarData.background ? this.avatarData.background : null;
        var text = this.avatarData && this.avatarData.text ? this.avatarData.text : null;
        this.background = background;
        //        var canvas = document.createElement('canvas');
        //        var canvas = this.dom.query("canvas");
        this.canvas = this.dom.querySelector(this._el, 'div');
        if (this.canvas) {
            /*
            this.canvas.height = size;
            this.canvas.width = size;           
            this.canvas.style.border = "1px solid #d3d3d3";
            if (!isSquare) {
                this.canvas.style.borderRadius = "50%";
            }
            var ctx = this.canvas.getContext("2d");
            var textArray = text.split(' ');
            var letter = textArray[0].substr(0, 1) + '' + (textArray.length > 1 ? textArray[1].substr(0, 1) : '');
            var x, y, fontSize;
            letter = letter.toUpperCase();
            if (letter.length === 1) {
                x = (28 * size) / 100;
                y = (70 * size) / 100;
                fontSize = (60 * size) / 100;
            }
            if (letter.length === 2) {
                x = (13 * size) / 100;
                y = (67 * size) / 100;
                fontSize = (50 * size) / 100;
            }
            if(this.avatarData.fixedColor) {
             this.canvas.style.backgroundColor = background || this.colorize(letter);                
            }else {
             this.canvas.style.backgroundColor = background || this.getRandomColor();
            }
            ctx.font = fontSize + "px Arial";
            ctx.fillStyle = fontColor;
            ctx.fillText(letter, x, y);
            //        this.letterSrc = canvas.toDataURL("image/png");
            */
            
            
            //div mode
            this.size = size;         
            this.border = border;
            if (!isSquare) {
                this.canvas.style.borderRadius = "50%";
            }
            var textArray = text.split(' ');
            var letter = textArray[0].substr(0, 1) + '' + (textArray.length > 1 ? textArray[1].substr(0, 1) : '');
            letter = letter.toUpperCase();
            this.letter =  letter;
            this.fontSize = (50*size)/100
            this.padding = (20*size)/100           
            if(this.avatarData.fixedColor) {
                this.background = background || this.colorize(letter);                
            }else {
             this.background = background || this.getRandomColor();
            }
            
            //        this.letterSrc = canvas.toDataURL("image/png");
        }
    };

    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    colorize(str) {
        for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
        var color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
        return '#' + Array(6 - color.length + 1).join('0') + color;
    }
    
    ngOnInit() {
        this.generateLetter();
    };
    ngOnChanges(...args: any[]) {
        this.generateLetter();
        //         setTimeout(() => {
        //              this.ref.tick();
        //         },200);
    }
}