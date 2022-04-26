import { Component, OnInit, Sanitizer } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<String>;
 
  ngOnInit() {
     this.interval$= interval(1000).pipe(
       filter(value => value % 3 === 0),
       map(value => value % 2 ===0 ?
        'paire' : 'impaire'),
        tap(text => this.test(text))
     )
    
   // interval$.subscribe(value => console.log(value));
  }
test(text : String){
  console.log( `log :${text}` );
}
}
