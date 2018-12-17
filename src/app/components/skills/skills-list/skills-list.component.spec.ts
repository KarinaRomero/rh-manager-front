import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListComponent } from './skills-list.component';
import {SkillService} from '../services/skills.service';

describe('SkillsListComponent', () => {
  let component: SkillsListComponent;
  let fixture: ComponentFixture<SkillsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsListComponent ],
      providers: [
        SkillService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
