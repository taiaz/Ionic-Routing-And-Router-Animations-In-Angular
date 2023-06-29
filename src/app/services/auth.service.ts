import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated = false;

  constructor(private readonly faio: FingerprintAIO, private readonly platform: Platform) {}

  async authenticate(): Promise<boolean> {
    try {
      if (!this.platform.is('hybrid') || !(await this.faio.isAvailable())) {
        console.warn('Biometric authentication not available');
        // call WebAuthentication
        this.authenticated = true;
      } else {
        this.authenticated = await this.faio.show({
          title: 'Face ID and Fingerprint authentication',
          description: 'please authenticate',
        });
      }
    } catch (e) {
      console.error('authentication failed', e);
      this.authenticated = false;
    }
    return this.authenticated;
  }
}
