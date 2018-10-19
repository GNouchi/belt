import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetpetComponent } from './netpet.component';

describe('NetpetComponent', () => {
  let component: NetpetComponent;
  let fixture: ComponentFixture<NetpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
