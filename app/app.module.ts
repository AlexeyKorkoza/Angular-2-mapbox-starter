import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MapBoxModule}  from 'angular2-mapbox/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MapBoxModule.forRoot("pk.eyJ1IjoiZHVja3MxNiIsImEiOiJjajBlNDc5amMwMWFmMndya2U5Z3VpNzZ6In0.kATInDgIKLPUUHIZDPPn6w")
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}