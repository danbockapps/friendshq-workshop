import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonComponent } from './show-person.component';
import { FullNamePipe } from '../shared/full-name.pipe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Friend, Gender } from '../../shared';

fdescribe('ShowPersonComponent', () => {
  let component: ShowPersonComponent;
  let fixture: ComponentFixture<ShowPersonComponent>;
  let nameDisplayEl: DebugElement;
  let favEl: DebugElement;
  let friend: Friend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowPersonComponent,
        FullNamePipe,
      ]
    });

    friend = {
      'id': 1,
      'firstName': 'Michelle',
      'lastName': 'Mulroy',
      'gender': Gender.F,
      'fav': true
    };

    fixture = TestBed.createComponent(ShowPersonComponent);
    component = fixture.componentInstance;

    nameDisplayEl = fixture.debugElement.query(By.css("h5.mb-1"));
    favEl = fixture.debugElement.query(By.css("span.fa"));
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});
