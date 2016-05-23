import {Component, ElementRef, EventEmitter, Input, Output, OnInit} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser'


@Component({
    selector: 'avatar',
    template: `
      
<!--<img style="background: {{background}}" src="{{letterSrc}}" /> -->
<canvas id="" width="100" height="100" >
Your browser does not support the HTML5 canvas tag.</canvas>
        `,
    providers: [BrowserDomAdapter]

})
export class LetterAvatarDirective implements OnInit {
    @Input('avatardata') avatarData: any;
    letterSrc: any;
    background: any;
    private _el: HTMLElement;

    constructor(el: ElementRef, private dom: BrowserDomAdapter) {
        this._el = el.nativeElement;
        

    }
    generateLetter() {
        if(!this.avatarData) {
            throw Error("LetterAvatarDirective configdata not provides");
        }
        if(!this.avatarData.text) {
            throw Error("LetterAvatarDirective configdata text missing");
        }
        var size = this.avatarData && this.avatarData.size ? this.avatarData.size : 100;
        var fontColor = "#FFFFFF";
        var isSquare = this.avatarData && this.avatarData.isSquare ? true :false;
        var background = this.avatarData && this.avatarData.background ? this.avatarData.background : null;
        var text = this.avatarData && this.avatarData.text ? this.avatarData.text : null;
        this.background = background;
//        var canvas = document.createElement('canvas');
//        var canvas = this.dom.query("canvas");
        var canvas = this.dom.querySelector(this._el, 'canvas');
        canvas.height = size;
        canvas.width = size;
        canvas.style.backgroundColor = background || this.getRandomColor();
        canvas.style.border = "1px solid #d3d3d3";
        if(!isSquare) {
            canvas.style.borderRadius = "50%";
        }
        var ctx = canvas.getContext("2d");
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
            x = (18 * size) / 100;
            y = (67 * size) / 100;
            fontSize = (50 * size) / 100;
        }

        ctx.font = fontSize + "px Arial";
        ctx.fillStyle = fontColor;
        ctx.fillText(letter, x, y);
//        this.letterSrc = canvas.toDataURL("image/png");
    };

    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    ngOnInit() {
        this.generateLetter();
    };
}