import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(v: any) {
    console.log('[LOG]', v);
  }
  warn(m: string) {
    console.warn('[WARN]', m);
  }
}
