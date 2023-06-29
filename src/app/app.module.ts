import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemOfferDexieStore } from './stores/item-offer-dexie.store';
import { ItemOfferStore } from './stores/item-offer.store';
import { PICTURE_STORE_TOKEN, PictureIndexDbStore } from './stores/picture-index-db.store';
import { customAnimation } from './animations/custom.animation';

@NgModule({
    declarations: [ AppComponent ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({navAnimation: customAnimation}),
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        FingerprintAIO,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: ItemOfferStore, useClass: ItemOfferDexieStore },
        { provide: PICTURE_STORE_TOKEN, useClass: PictureIndexDbStore },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
