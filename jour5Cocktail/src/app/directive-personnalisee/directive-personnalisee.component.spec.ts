import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePersonnaliseeComponent } from './directive-personnalisee.component';

describe('DirectivePersonnaliseeComponent', () => {
  let component: DirectivePersonnaliseeComponent;
  let fixture: ComponentFixture<DirectivePersonnaliseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivePersonnaliseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePersonnaliseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
