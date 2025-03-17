import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter = 0;
  counterServiceSub?: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterServiceSub = this.counterService.counterChanged.subscribe(
      (newVal) => (this.counter = newVal)
    );
  }

  ngOnDestroy(): void {
    if (this.counterServiceSub) {
      this.counterServiceSub.unsubscribe();
    }
  }

  // constructor(private store: Store<{counter: number}>) {
  //   this.counter = store.select(selectCount);
  // }
}
