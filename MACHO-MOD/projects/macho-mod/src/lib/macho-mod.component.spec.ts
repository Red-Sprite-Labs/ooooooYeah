import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MACHOMODComponent } from './macho-mod.component';

describe('MACHOMODComponent', () => {
  let component: MACHOMODComponent;
  let fixture: ComponentFixture<MACHOMODComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MACHOMODComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MACHOMODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
