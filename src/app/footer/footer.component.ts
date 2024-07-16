import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  totalExp: number = 0;
  compareFlag: string = '';

  constructor() {}

  ngOnInit(): void {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    this.totalExp = year - 2015;
    this.compareFlag = month >= 6 ? 'more than' : 'approximately';
  }

  downloadCV() {
    window.open('assets/CV2024.pdf');
  }
}
