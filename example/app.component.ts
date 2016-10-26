
import {Component, OnChanges, ChangeDetectionStrategy, NgZone, ApplicationRef} from '@angular/core';
import {LetterAvatarDirective} from '../directives/letter-avatar.directive';

@Component({
    selector: 'my-app',
    template: `
        <avatar  [avatardata]="avatarDataSquare"></avatar>
        <avatar  [avatardata]="avatarDataCircle1"></avatar>
        <avatar  [avatardata]="avatarDataCircle2" ></avatar>
        Enter Size <input type='text' placeholder='enter size' (change)='change()' [(ngModel)]='size' />
        Enter Text <input type='text' placeholder='enter size' (change)='change()' [(ngModel)]='text' />`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges {
    constructor(private ngZone: NgZone, private ref: ApplicationRef) {

    }
    public avatarDataSquare: any = {
        size: 150,
        //        background: '#F39C12', // by default it will produce dynamic colors
        fontColor: '#FFFFFF',
        border: "2px solid #d3d3d3",
        isSquare: true,
        text: "Rajan Gunasekaran"
    };
    public avatarDataCircle1: any = {
        size: 100,
        //        background: '#F39C12', // by default it will produce dynamic colors
        fontColor: '#FFFFFF',
        border: "2px solid #d3d3d3",
        isSquare: false,
        text: "Rajan Gunasekaran"
    };
    public avatarDataCircle2: any = {
        size: 100,
        //        background: '#F39C12', // by default it will produce dynamic colors
        fontColor: '#FFFFFF',
        border: "2px solid #d3d3d3",
        isSquare: false,
        text: "Siva",
        fixedColor:true
    };
    size = 100;
    text = 'Siva';
    ngOnChanges(change) {
        console.log(change);
    }
    change() {
        this.ngZone.run(() => {
            this.avatarDataCircle2 = {
                size: this.size,
                //        background: '#F39C12', // by default it will produce dynamic colors
                fontColor: '#FFFFFF',
                border: "2px solid #d3d3d3",
                isSquare: false,
                text: this.text,
                fixedColor:true
            };
        })
    }
}
