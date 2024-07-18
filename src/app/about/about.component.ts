import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadCV() {
    window.open('assets/CV2024.pdf');
  }

  openMail() {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=mriganka.s.sarkar@gmail.com',
      '_blank'
    );
  }
}
