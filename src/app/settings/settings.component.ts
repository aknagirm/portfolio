import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    trigger('settingsSlider', [
      state('expand', style({ right: '0px' })),
      state('collapse', style({ right: '-150px' })),
      transition('expand <=> collapse', [animate('300ms ease-out')]),
    ]),
  ],
})
export class SettingsComponent implements OnInit {
  @ViewChild('colorPicker') colorPicker!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;
  isSliderOpen = false;
  currentColor: string = '';
  colorList = [
    '#3a7ca5', // #8bb9fe
    '#CF6679', // red #ea868f-darkred #e685b5
    '#03DAC6', // green #75b798-darkgreen
    '#fbb917',
    '#BB86FC', // purple #BB86FC
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.fontColorChange(this.colorList[1]);
    this.currentColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--highlighted-font-color');

    this.renderer.listen('window', 'click', () => {
      this.isSliderOpen = false;
    });
  }

  fontColorChange(color: string) {
    this.renderer.setStyle(
      document.documentElement,
      '--highlighted-font-color',
      color,
      2
    );
    this.currentColor = color;
  }

  sliderToggle() {
    this.isSliderOpen = !this.isSliderOpen;
  }
}
