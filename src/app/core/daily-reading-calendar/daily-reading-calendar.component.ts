import {Component, OnInit} from '@angular/core';

export interface DailyReading {
  date: Date;
  verse: string;
}

@Component({
  selector: 'app-daily-reading-calendar',
  templateUrl: './daily-reading-calendar.component.html',
  styleUrls: ['./daily-reading-calendar.component.css']
})
export class DailyReadingCalendarComponent implements OnInit {

  readings: DailyReading[] = [
    {date: new Date(2021, 5, 27), verse: '2 Reyes 14:21-14:25'},
    {date: new Date(2021, 5, 28), verse: '2 Reyes 14:26-14:29'},
    {date: new Date(2021, 5, 29), verse: 'Amós 4-6'},
    {date: new Date(2021, 5, 30), verse: 'Amós 7-9'},
    {date: new Date(2021, 6, 1), verse: '2 Reyes 15-17'},
    {date: new Date(2021, 6, 2), verse: 'Oseas 1-4'},
    {date: new Date(2021, 6, 3), verse: 'Oseas 5-7'},
    {date: new Date(2021, 6, 4), verse: 'Oseas 8-10'},
    {date: new Date(2021, 6, 5), verse: 'Oseas 11-14'},
    {date: new Date(2021, 6, 6), verse: '2 Reyes 18-19'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  itemClass(date: Date): string {
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    if (date.getTime() === today.getTime()) {
      return 'today';
    }
    return '';
  }

}
