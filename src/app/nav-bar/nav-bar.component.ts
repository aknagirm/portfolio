import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  colorList = [
    '#BB86FC', // purple
    '#03DAC6', // green
    '#CF6679', // red
  ];

  constructor(private render: Renderer2) {}

  ngOnInit(): void {}

  fontColorChange(color: string) {
    this.render.setStyle(document.documentElement, '--font-color', color, 2);
  }
}
