import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projectList = [
    {
      name: 'Dictionary App',
      image: 'dictionary.png',
      description: `This is a real world dictionary application, where you can check
            definition, synonyms, pronounciations, phonetic audio, parts of
            speeches etc of any word. This application is dual theme application
            and supports Serif, Sans-Serif, and Monospace fonts as per user's
            choice`,
      link: 'https://aknagirm.github.io/ng-dictionary-web/',
    },
    {
      name: 'Memory Game',
      image: 'memory.png',
      description: `This is fun game for the people of all age groups. Here you can
            test and sharpen your memory with different difficulty levels (4x4
            or 6x6). You can enjoy this game with your friends or as a solo
            player. You can choose the theme as simple Numbers mode or can make
            it more iconic with Icons mode`,
      link: 'https://aknagirm.github.io/memory-game/home',
    },
    {
      name: 'Make Ur Mark',
      image: 'make-ur-mark.png',
      description: `This is an online school application, where student can study,
              download material, pay fees, attend online exams. Faculty can schedule exam, modify materials,
              schedule classes. Also user with admin access can block, active Student/Faculty.`,
      link: 'https://makeurmark-358b9.firebaseapp.com/home',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
