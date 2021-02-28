import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Attendee } from './../../../models';

import { EventListComponent } from './event-list.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no attendees on load', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have 1 attendee on load', () => {
    component.attendees = [
      {name: 'Duncan', attending: true, guests: 2}
    ] as Attendee[];
  
    fixture.detectChanges();

    expect(component).toMatchSnapshot();
  });
});

