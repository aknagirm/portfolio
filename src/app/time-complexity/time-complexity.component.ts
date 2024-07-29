import { Component, OnInit } from '@angular/core';
import { timeComplexity } from '../models/time-complexity.const';

@Component({
  selector: 'app-time-complexity',
  templateUrl: './time-complexity.component.html',
  styleUrls: ['./time-complexity.component.scss'],
})
export class TimeComplexityComponent implements OnInit {
  timeComplexity = timeComplexity;
  constructor() {}

  ngOnInit(): void {}
}
