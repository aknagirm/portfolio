import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('about') aboutEl!: ElementRef;
  @ViewChild('experience') experienceEl!: ElementRef;
  @ViewChild('project') projectEl!: ElementRef;
  @ViewChild('contact') contactEl!: ElementRef;

  title = 'portfolio';

  scrolIntoViewSelect(target: string) {
    switch (target) {
      case 'about': {
        this.scrolIntoView(this.aboutEl);
        break;
      }
      case 'experience': {
        this.scrolIntoView(this.experienceEl);
        break;
      }
      case 'project': {
        this.scrolIntoView(this.projectEl);
        break;
      }
      case 'contact': {
        this.scrolIntoView(this.contactEl);
        break;
      }
      default: {
        this.scrolIntoView(this.aboutEl);
      }
    }
  }

  scrolIntoView(element: ElementRef) {
    const elementPosition = element.nativeElement.getBoundingClientRect().top;
    const headerOffset = 95;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
