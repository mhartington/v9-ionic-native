import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SplashScreen ],
  bootstrap: [AppComponent]
})
export class AppModule { }
