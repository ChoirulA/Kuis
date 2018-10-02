import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuisformComponent } from './kuisform.component';

describe('KuisformComponent', () => {
  let component: KuisformComponent;
  let fixture: ComponentFixture<KuisformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuisformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuisformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
