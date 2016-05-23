# angular2-letter-avatar
letter avatar is angular2 directive. It will generate avatar based on given text

The sources for this package are in (https://github.com/rajan-g/angular2-letter-avatar.git) repo. Please file issues and pull requests against that repo.

##Usage
###Install from npm
    ```
        npm install angular2-letter-avatar
   ```
### Sample Output
![letter-avatar](https://cloud.githubusercontent.com/assets/13415700/15478225/db7ba80c-2136-11e6-8fe6-0e58bfb54d50.png)
###component file use like below
            ```
        import {Component} from 'angular2/core';
        import {LetterAvatarDirective} from '../directives/letter-avatar.directive';

        @Component({
            selector : 'my-app',
            directives: [LetterAvatarDirective],
            template:  `
                <avatar  [avatardata]="avatarDataSquare"></avatar>
                <avatar  [avatardata]="avatarDataCircle1"></avatar>
                <avatar  [avatardata]="avatarDataCircle2"></avatar>`    
        })
        export class AppComponent {
            public avatarDataSquare: any = {
                size: 100,
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
                text: "Siva "
            };
        }

    ```

###For Test demo
 - Download this module
 - Run following command
    ```
    npm install
    npm start
    ```       

