import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, share, shareReplay, startWith, tap } from 'rxjs/operators';

@Component({
    selector: 'app-tabbed',
    templateUrl: './tabbed.page.html',
    styleUrls: [ './tabbed.page.scss' ],
})
export class TabbedPage implements OnInit {
    mobile$?: Observable<boolean>;

    constructor(private readonly platform: Platform) {
    }

    ngOnInit() {
        this.mobile$ = fromEvent(window, 'resize').pipe(
            debounceTime(200),
            tap(x => console.log(x)),
            map((evt: any) => evt.target?.innerWidth < 500 || this.getPlatform()),
            startWith(this.getPlatform()),
            shareReplay(1),
        )
    }

    private getPlatform() {
        return this.platform.is('mobile') || this.platform.is('mobileweb');
    }
}
