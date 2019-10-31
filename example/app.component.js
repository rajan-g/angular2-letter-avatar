System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, AppComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(ngZone, ref) {
                    this.ngZone = ngZone;
                    this.ref = ref;
                    this.avatarDataSquare = {
                        size: 150,
                        //        background: '#F39C12', // by default it will produce dynamic colors
                        fontColor: '#FFFFFF',
                        border: "2px solid #d3d3d3",
                        isSquare: true,
                        text: "Rajan Gunasekaran"
                    };
                    this.avatarDataCircle1 = {
                        size: 100,
                        //        background: '#F39C12', // by default it will produce dynamic colors
                        fontColor: '#FFFFFF',
                        border: "2px solid #d3d3d3",
                        isSquare: false,
                        text: "Rajan Gunasekaran"
                    };
                    this.avatarDataCircle2 = {
                        size: 100,
                        //        background: '#F39C12', // by default it will produce dynamic colors
                        fontColor: '#FFFFFF',
                        border: "2px solid #d3d3d3",
                        isSquare: false,
                        text: "Siva",
                        fixedColor: true
                    };
                    this.size = 100;
                    this.text = 'Siva';
                }
                AppComponent.prototype.ngOnChanges = function (change) {
                    console.log(change);
                };
                AppComponent.prototype.change = function () {
                    var _this = this;
                    this.ngZone.run(function () {
                        _this.avatarDataCircle2 = {
                            size: _this.size,
                            //        background: '#F39C12', // by default it will produce dynamic colors
                            fontColor: '#FFFFFF',
                            border: "2px solid #d3d3d3",
                            isSquare: false,
                            text: _this.text,
                            fixedColor: true
                        };
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <avatar  [avatardata]=\"avatarDataSquare\"></avatar>\n        <avatar  [avatardata]=\"avatarDataCircle1\"></avatar>\n        <avatar  [avatardata]=\"avatarDataCircle2\" ></avatar>\n        Enter Size <input type='text' placeholder='enter size' (change)='change()' [(ngModel)]='size' />\n        Enter Text <input type='text' placeholder='enter size' (change)='change()' [(ngModel)]='text' />",
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }),
                    __metadata("design:paramtypes", [core_1.NgZone, core_1.ApplicationRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map