import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import { addHours, startOfDay } from 'date-fns';
import { User } from './day-view-scheduler.component';

const users: User[] = [
  {
    id: 0,
    name: 'John smith',
    color: colors.yellow
  },
  {
    id: 1,
    name: 'Jane Doe',
    color: colors.blue
  }
];

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})
export class DemoComponent {
  public viewDate = new Date();

  public users = users;

  public events: CalendarEvent[] = [
    {
      title: 'An event',
      color: users[0].color,
      start: addHours(startOfDay(new Date()), 5),
      meta: {
        user: users[0]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      title: 'Another event',
      color: users[1].color,
      start: addHours(startOfDay(new Date()), 2),
      meta: {
        user: users[1]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      title: 'An 3rd event',
      color: users[0].color,
      start: addHours(startOfDay(new Date()), 7),
      meta: {
        user: users[0]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  public eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.events = [...this.events];
  }

  // public userChanged({ event, newUser }) {
  //   event.color = newUser.color;
  //   event.meta.user = newUser;
  //   this.events = [...this.events];
  // }
}
