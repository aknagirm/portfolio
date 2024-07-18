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
    '#8f19e8', // purple #BB86FC
    '#03DAC6', // green
    '#CF6679', // red
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.fontColorChange(this.colorList[0]);
    this.currentColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--highlighted-font-color');

    this.renderer.listen('window', 'click', (event: Event) => {
      const clickedElementId = (event.target as Element).id;

      const childElem = Array.prototype.slice
        .call(this.colorPicker.nativeElement.children)
        .map((element) => (element as Element).id);

      /* if (!childElem.includes(clickedElementId) && this.isColorPickerVisible) {
        this.isColorPickerVisible = false;
      } */
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
