import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  workExperience = [
    {
      name: 'Boeing India Private Limited',
      start: 'Aug, 2022',
      end: 'Current',
      position: 'Software Developer (III)',
      domain: ['Aviation', 'Aviation - Learning Solution'],
      projects: [
        `Migration of an legacy application from old AngularJs to Angular 12. The application is used by multiple renowed Flight Schools, for pilot trainig`,
        `Virtual Airplane tour - This application was created in Angular 16, where the user can move around indide a virtual airplane and check all the parts. Application was used for the internal training purposes.`,
      ],
    },
    {
      name: 'Cognizant Technology Solution',
      start: 'Jun, 2021',
      end: 'Jul, 2022',
      position: 'Associate - Project',
      domain: ['Insurance'],
      projects: [
        `Configured Insurance domain application, where users can buy/sell/modify Govt/Corporate bonds.`,
        `Configured widget(webcomponent) which can be consumed by the consumer application for actions`,
      ],
    },
    {
      name: 'Tata Consultancy Services',
      start: 'Jun, 2015',
      end: 'May, 2021',
      position: 'IT Analyst',
      domain: ['Telecom', 'Banking & Finance'],
      projects: [
        `Telecommunication domain, database mapping, report automation using
          PL-SQL and Unix. Schedular handling`,
        `Migration of client admin page from old Html, Css,
        JS to Angular 6, This portal is used for customer information handling.`,
        `File Dashboard system - this is where customers could monitor all
        the file movement process, anything file movement/status related
        changes needs to be shown immediately`,
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
