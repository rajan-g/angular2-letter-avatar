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
                        //            throw Error("LetterAvatarDirective configdata text missing");
                        console.log("LetterAvatarDirective configdata text missing");
                        this.avatarData.text = '?';
                    }
                    var size = this.avatarData && this.avatarData.size ? this.avatarData.size : 100;
                    var fontColor = this.avatarData.fontColor ? this.avatarData.fontColor : "#FFFFFF";
                    var isSquare = this.avatarData && this.avatarData.isSquare ? true : false;
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
                        this.canvas.style.height = size;
                        this.canvas.style.width = size;
                        this.canvas.style.border = "1px solid #d3d3d3";
                        if (!isSquare) {
                            this.canvas.style.borderRadius = "50%";
                        }
                        var textArray = text.split(' ');
                        var letter = textArray[0].substr(0, 1) + '' + (textArray.length > 1 ? textArray[1].substr(0, 1) : '');
                        letter = letter.toUpperCase();
                        this.letter = letter;
                        this.fontSize = (50 * size) / 100;
                        this.padding = (20 * size) / 100;
                        if (this.avatarData.fixedColor) {
                            this.canvas.style.backgroundColor = background || this.colorize(letter);
                        }
                        else {
                            this.canvas.style.backgroundColor = background || this.getRandomColor();
                        }
                    }
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
                LetterAvatarDirective.prototype.colorize = function (str) {
                    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash))
                        ;
                    var color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
                    return '#' + Array(6 - color.length + 1).join('0') + color;
                };
                LetterAvatarDirective.prototype.ngOnInit = function () {
                    this.generateLetter();
                };
                ;
                LetterAvatarDirective.prototype.ngOnChanges = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    this.generateLetter();
                    //         setTimeout(() => {
                    //              this.ref.tick();
                    //         },200);
                };
                __decorate([
                    core_1.Input('avatardata'), 
                    __metadata('design:type', Object)
                ], LetterAvatarDirective.prototype, "avatarData", void 0);
                LetterAvatarDirective = __decorate([
                    core_1.Component({
                        selector: 'avatar',
                        template: "      \n<!--<img style=\"background: {{background}}\" src=\"{{letterSrc}}\" /> \n<canvas width=\"100\" height=\"100\" >\nYour browser does not support the HTML5 canvas tag.</canvas>\n-->\n<div style=\"text-align:center;width:200px; height:200px; border-radius:50%;background:red;\">\n<div style=\"padding-top: {{padding}}px;font-size: {{fontSize}}px;color:#fff\">{{letter}}</div>\n</div>\n",
                        providers: [browser_1.BrowserDomAdapter],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
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