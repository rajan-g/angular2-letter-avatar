import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {LetterAvatarDirective} from '../directives/letter-avatar.directive';
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, LetterAvatarDirective],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }