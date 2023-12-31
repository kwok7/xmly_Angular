import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  readonly isBrowser?: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    console.log('isBrowser', this.isBrowser);
  }

  setStorage(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }
  getStorage(key: string): string | null | undefined {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return;
  }
  removeStorage(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }
  clearStorage(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
