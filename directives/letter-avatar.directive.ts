import {Component, ElementRef, Input, OnInit, ChangeDetectionStrategy, OnChanges} from '@angular/core';
import {FORM_DIRECTIVES, NgIf} from '@angular/common';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';


@Component({
    selector: 'avatar',
    template: `      
<!--<img style="background: {{background}}" src="{{letterSrc}}" /> -->
<!--<canvas width="100" height="100" >
Your browser does not support the HTML5 canvas tag.</canvas>-->
<div *ngIf="props" [style.background-color]="props.background" [style.width] = "props.size" [style.height] = 'props.size' [style.font-size] = 'props.fontSize' [style.border] = 'props.border' [style.border-radius] = 'props.borderradius' [style.text-align] ="props.textalign"> 
<div [style.padding-top]='props.padding' [style.color]='fontColor'>{{props.letter}}</div>
</div>
`,  directives: [FORM_DIRECTIVES, NgIf],
    providers: [BrowserDomAdapter],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class LetterAvatarDirective implements OnInit, OnChanges {
    @Input('avatardata') avatarData: any;
    letterSrc: any;
    background: any = 'red';
    fontSize: any = 49;
    padding: any = 28;
    letter: any = "?";
    size: any = 100;
    fontColor:any = '#FFFFFF';
    border: any;
    canvas: any;
    props: Object = null;
    private _el: HTMLElement;

    constructor(el: ElementRef, private dom: BrowserDomAdapter) {
        this._el = el.nativeElement;
    }
    test() {
      this.generateLetter();
    }
    changeBackground() {
        let style = 'width:'+ this.props['size']+ 'px ;'+
             'height:'+  this.props['size'] + 'px ;'+
            'background-color:'+  this.props['background']+';'+
             'font-size:'+ this.props['fontSize'] + 'px; '+
            'text-align:'+ 'center;'+
            'border-radius:'+ (this.props['isSquare'] ? '0%;' : '50%;')+
            'border:'+ this.props['border'];
            console.log(style);
            return style;
        
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
        this.fontColor = this.avatarData.fontColor ? this.avatarData.fontColor : "#FFFFFF";
        var isSquare = this.avatarData && this.avatarData.isSquare ? true : false;
        var border = this.avatarData && this.avatarData.border ? this.avatarData.border : "1px solid #d3d3d3";
        var background = this.avatarData && this.avatarData.background ? this.avatarData.background : null;
        var text = this.avatarData && this.avatarData.text ? this.avatarData.text : null;
        this.background = background;
        /*****DIV******** start*/
        var textArray = text.split(' ');
        var letter = textArray[0].substr(0, 1) + '' + (textArray.length > 1 ? textArray[1].substr(0, 1) : '');
        var x, y, fontSize;
        letter = letter.toUpperCase();
        this.fontSize = (39 * size) / 100;
        this.padding = (28 * size) / 100;
        this.letter = letter;
        this.size = size;
        this.props = new Object();
        this.props['size'] = size;
        this.props['padding'] = this.padding;
        this.props['letter'] = letter;
        this.props['fontSize'] = this.fontSize;
        if(isSquare) {
            this.props['borderradius'] = '0%';
        } else {
            this.props['borderradius'] = '50%';
        }
        this.props['textalign'] = 'center';
        this.props['border'] = border;
        this.props['background'] = background;
         if(this.avatarData.fixedColor && !background) {
             this.props['background'] = background || this.colorize(letter);                
            }else {
             this.props['background'] = background || this.getRandomColor();
            }
        /*****DIV********end*/
        
        //        var canvas = document.createElement('canvas');
        //        var canvas = this.dom.query("canvas");
        
        /*this.canvas = this.dom.querySelector(this._el, 'canvas');
        if (this.canvas) {
            
            this.canvas.height = size;
            this.canvas.width = size;           
            this.canvas.style.border = border;
            if (!isSquare) {
                this.canvas.style.borderRadius = "50%";
            }
            var ctx = this.canvas.getContext("2d");
            var textArray = text.split(' ');
            var letter = textArray[0].substr(0, 1) + '' + (textArray.length > 1 ? textArray[1].substr(0, 1) : '');
            var x, y, fontSize;
            letter = letter.toUpperCase();
             var samllPatter = new RegExp("[IJ]+");
             var bigPattern = new RegExp("[M]+");
            if (letter.length === 1) {
                x = (37 * size) / 100;
                y = (63 * size) / 100;
                fontSize = (40 * size) / 100;               
                if (samllPatter.test(letter)) {
                    x = (42 * size) / 100;
                }
                if(letter.indexOf('M')!==-1 || letter.indexOf('W')!==-1 ){
                  x = (33 * size) / 100;
                }               
            }
            if (letter.length === 2) {
                x = (24 * size) / 100;
                y = (63 * size) / 100;
                fontSize = (40 * size) / 100;
          
                 if (((letter.indexOf('I')!=-1 && (letter.indexOf('M')==-1) && (letter.indexOf('W')==-1))) ||
                 (letter.indexOf('J')!=-1 && (letter.indexOf('M')==-1) && (letter.indexOf('W')==-1))) {
                    x = (30 * size) / 100;
                 } else if (samllPatter.test(letter)) {
                     x = (25 * size) / 100;
                }
                if(letter == 'MM' || letter == 'MW' || letter == 'WM') {
                    x = (18 * size) / 100;
                }
                
                if(letter == 'II' || letter == 'JJ') {
                    x = (35 * size) / 100;
                }
            }
            if(this.avatarData.fixedColor) {
             this.canvas.style.backgroundColor = background || this.colorize(letter);                
            }else {
             this.canvas.style.backgroundColor = background || this.getRandomColor();
            }
            ctx.font = fontSize + "px Times New Roman, Georgia, Serif";
            ctx.fillStyle = this.fontColor;
            console.log('x, y',x, y);
            ctx.fillText(letter, x, y); */
            //        this.letterSrc = canvas.toDataURL("image/png");
            
            
         /*   
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
            if(this.avatarData.border){  
            var borderSize = this.avatarData.border.split(' ')[0];
//            if(borderSize) {
//                borderSize = borderSize.replace(/\D/g, '');
//                borderSize = parseInt(borderSize);
//                if (borderSize && borderSize >0) {
//                    this.padding = this.padding - borderSize;
//                }
//            }
            }
            if(this.avatarData.fixedColor) {
                this.background = background || this.colorize(letter);                
            }else {
             this.background = background || this.getRandomColor();
            }
            
            
            //        this.letterSrc = canvas.toDataURL("image/png");
        }*/
        return true;
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
    }
    ngOnChanges(...args: any[]) {
        this.generateLetter();
        console.log(args);
    }
}