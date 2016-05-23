System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var LetterAvatarDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            LetterAvatarDirective = (function () {
                function LetterAvatarDirective(el, dom) {
                    this.dom = dom;
                    this._el = el.nativeElement;
                }
                LetterAvatarDirective.prototype.generateLetter = function () {
                    if (!this.avatarData) {
                        throw Error("LetterAvatarDirective configdata not provides");
                    }
                    if (!this.avatarData.text) {
                        throw Error("LetterAvatarDirective configdata text missing");
                    }
                    var size = this.avatarData && this.avatarData.size ? this.avatarData.size : 100;
                    var fontColor = "#FFFFFF";
                    var isSquare = this.avatarData && this.avatarData.isSquare ? true : false;
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
                    if (!isSquare) {
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
                ;
                LetterAvatarDirective.prototype.getRandomColor = function () {
                    var letters = '0123456789ABCDEF'.split('');
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                };
                LetterAvatarDirective.prototype.ngOnInit = function () {
                    this.generateLetter();
                };
                ;
                __decorate([
                    core_1.Input('avatardata'), 
                    __metadata('design:type', Object)
                ], LetterAvatarDirective.prototype, "avatarData", void 0);
                LetterAvatarDirective = __decorate([
                    core_1.Component({
                        selector: 'avatar',
                        template: "\n      \n<!--<img style=\"background: {{background}}\" src=\"{{letterSrc}}\" /> -->\n<canvas id=\"\" width=\"100\" height=\"100\" >\nYour browser does not support the HTML5 canvas tag.</canvas>\n        ",
                        providers: [browser_1.BrowserDomAdapter]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, browser_1.BrowserDomAdapter])
                ], LetterAvatarDirective);
                return LetterAvatarDirective;
            }());
            exports_1("LetterAvatarDirective", LetterAvatarDirective);
        }
    }
});
//# sourceMappingURL=letter-avatar.directive.js.map