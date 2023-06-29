import { InjectionToken } from '@angular/core';
import { ImmoStorage } from '../stores/immo-store.interface';

export const STORAGE_TOKEN = new InjectionToken<ImmoStorage>('Inject Storage');
