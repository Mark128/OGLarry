import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ITray } from '../data/tray';


@Injectable({
  providedIn: 'root'
})
export class TrayDetailResolverService implements Resolve<ITray> {

  constructor(private fb: FirebaseService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITray> | Observable<never> {
    const urlName = route.paramMap.get('name');
    const nameArray = urlName.split('-', 2);
    const name = nameArray[1];
    const category = nameArray[0];

    switch (category) {
      case 'Original': {
        return this.fb.getOriginalTray(name).pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t[0].payload.doc.data());
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case 'Mini': {
        return this.fb.getMiniTray(name).pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t[0].payload.doc.data());
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case 'Custom': {
        return this.fb.getCustomTray(name).pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t[0].payload.doc.data());
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case 'Ashtray': {
        return this.fb.getAshtray(name).pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t[0].payload.doc.data());
          } else {
            return EMPTY;
          }
        })
      );
        break;
      }
      case '1OFF': {
        return this.fb.getOneOff(name).pipe(take(1), mergeMap( t => {
          if (t) {
            return of (t[0].payload.doc.data());
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
