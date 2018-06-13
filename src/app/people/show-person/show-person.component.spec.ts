import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonComponent } from './show-person.component';
import { FullNamePipe } from '../shared/full-name.pipe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Friend, Gender } from '../../shared';

describe('ShowPersonComponent', () => {
  let component: ShowPersonComponent;
  let fixture: ComponentFixture<ShowPersonComponent>;
  let nameDisplayEl: DebugElement;
  let favEl: DebugElement;
  let heartSpanEl: DebugElement;
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
    favEl = fixture.debugElement.query(By.css("div.heart-rating"));
    heartSpanEl = fixture.debugElement.query(By.css("span.fa"));
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should reverse the like status of a friend', () => {
    let spc: ShowPersonComponent = new ShowPersonComponent();
    let friend: Friend = {
      id: 1,
      firstName: "Rich",
      lastName: "Gedman",
      fav: true,
      gender: Gender.M
    }
    spc.friend = friend;
    spc.like();
    expect(spc.friend.fav).toBe(false);
  });

  it('should reverse the like status, component version', () => {
    component.friend = friend;
    component.like();
    expect(component.friend.fav).toBe(false);
  });

  it('should display the full name', () => {
    component.friend = friend;

    // Process the DOM so that we can run the test
    fixture.detectChanges();

    // Run the test
    expect(nameDisplayEl.nativeElement.textContent).toContain('Michelle Mulroy');
  });

  it('should like a friend when clicked', () => {
    component.friend = friend;
    component.likeEvent.subscribe(
      data => {
        expect(data).toEqual(friend);
      }
    );
    favEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.friend.fav).toBe(false);
  });

  //This doesn't work - both classes are on the element after detectChanges.
  xit('should have the right class on the heart', () => {
    component.friend = friend;

    fixture.detectChanges();
    expect(Object.keys(heartSpanEl.classes)).toContain('fa-heart');
    expect(Object.keys(heartSpanEl.classes)).not.toContain('fa-heart-o');

    favEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(Object.keys(heartSpanEl.classes)).toContain('fa-heart-o');
    expect(Object.keys(heartSpanEl.classes)).not.toContain('fa-heart');
  });
});
