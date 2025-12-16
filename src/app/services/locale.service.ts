import { Injectable, signal } from '@angular/core';

export type availableLocales = 'es' | 'fr' | 'en' | 'it';

@Injectable({providedIn: 'root'})
export class LocaleService {
    
    private currentLocale = signal<availableLocales>('it');

    constructor() {
        this.currentLocale.set(
            localStorage.getItem('locale') as availableLocales || 'it'
        );
    }
     
    getCurrentLocale() {
        return this.currentLocale();
    }

    changeLocale(locale: availableLocales) {
        localStorage.setItem('locale', locale);
        this.currentLocale.set(locale);
        window.location.reload();
    }
}