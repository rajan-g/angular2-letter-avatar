System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var LetterAvatarDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LetterAvatarDirective = (function () {
                function LetterAvatarDirective(el) {
                    this.background = 'red';
                    this.fontSize = 49;
                    this.padding = 28;
                    this.letter = "?";
                    this.size = 100;
                    this.fontColor = '#FFFFFF';
                    this.props = null;
                    this._el = el.nativeElement;
                }
                LetterAvatarDirective.prototype.test = function () {
                    this.generateLetter();
                };
                LetterAvatarDirective.prototype.generateLetter = function () {
                    if (!this.avatarData) {
                        throw Error("LetterAvatarDirective configdata not provides");
                    }
                    if (!this.avatarData.text) {
                        this.avatarData.text = '?';
                    }
                    var size = this.avatarData && this.avatarData.size ? this.avatarData.size : 100;
                    this.fontColor = this.avatarData.fontColor ? this.avatarData.fontColor : "#FFFFFF";
                    var isSquare = this.avatarData && this.avatarData.isSquare ? true : false;
                    var border = this.avatarData && this.avatarData.border ? this.avatarData.border : "1px solid #d3d3d3";
                    var background = this.avatarData && this.avatarData.background ? this.avatarData.background : null;
                    var text = this.avatarData && this.avatarData.text ? this.avatarData.text : null;
                    this.background = background;
                    var textArray = text.split(' ');
                    var letter = textArray[0].substr(0, 1) + '' + (textArray.length > 1 ? textArray[1].substr(0, 1) : '');
                    letter = letter.toUpperCase();
                    this.fontSize = (39 * size) / 100;
                    this.padding = (28 * size) / 100;
                    this.letter = letter;
                    this.size = size;
                    this.props = new Object();
                    this.props['size'] = size + 'px';
                    this.props['lineheight'] = this.size + 'px';
                    this.props['letter'] = letter;
                    this.props['fontSize'] = this.fontSize + 'px';
                    if (isSquare) {
                        this.props['borderradius'] = '0%';
                    }
                    else {
                        this.props['borderradius'] = '50%';
                    }
                    this.props['textalign'] = 'center';
                    this.props['border'] = border;
                    this.props['background'] = background;
                    if (this.avatarData.fixedColor && !background) {
                        this.props['background'] = background || this.colorize(letter);
                    }
                    else {
                        this.props['background'] = background || this.getRandomColor();
                    }
                    return true;
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
                LetterAvatarDirective.prototype.ngOnChanges = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    this.generateLetter();
                };
                __decorate([
                    core_1.Input('avatardata'), 
                    __metadata('design:type', Object)
                ], LetterAvatarDirective.prototype, "avatarData", void 0);
                LetterAvatarDirective = __decorate([
                    core_1.Component({
                        selector: 'avatar',
                        template: "\n            <div *ngIf=\"props\" [style.background-color]=\"props.background\" [style.width] = \"props.size\" [style.line-height]='props.lineheight' [style.height] = 'props.size' [style.font-size] = 'props.fontSize' [style.border] = 'props.border' [style.border-radius] = 'props.borderradius' [style.text-align] =\"props.textalign\"> \n            <div [style.color]='fontColor'>{{props.letter}}</div>\n            </div>\n            ",
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], LetterAvatarDirective);
                return LetterAvatarDirective;
            }());
            exports_1("LetterAvatarDirective", LetterAvatarDirective);
        }
    }
});
//# sourceMappingURL=letter-avatar.directive.js.map