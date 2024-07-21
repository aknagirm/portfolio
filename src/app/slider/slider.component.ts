import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @ViewChild('sliderInput') sliderInput!: HTMLInputElement;

  isLightTheme = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  changeTheme() {
    this.isLightTheme
      ? this.renderer.addClass(document.body, 'light-theme')
      : this.renderer.removeClass(document.body, 'light-theme');
  }

  changeThemeToLight(theme: boolean) {
    if (theme !== this.isLightTheme) {
      this.isLightTheme = theme;
      this.changeTheme();
    }
  }
}
