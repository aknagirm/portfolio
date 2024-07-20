import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  isDarkTheme = true;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  changeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.isDarkTheme
      ? this.renderer.removeClass(document.body, 'light-theme')
      : this.renderer.addClass(document.body, 'light-theme');
  }
}
