import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ITray } from '../data/tray';

@Injectable({
  providedIn: 'root'
})
export class TrayListResolverService {
  constructor(private fb: FirebaseService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const urlName = route.url.toString();

    switch (urlName) {
      case 'OriginalOG': {
        return this.fb.getOriginalTrays().pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t);
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case 'MiniOG': {
        return this.fb.getMiniTrays().pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t);
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case 'CustomOG': {
        return this.fb.getCustomTrays().pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t);
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case 'OGAshtrays': {
        return this.fb.getAshtrays().pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t);
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case '1OFF': {
        return this.fb.getOneOffs().pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t);
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
    }
  }
}
