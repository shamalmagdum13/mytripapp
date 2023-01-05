import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListComponent } from './buslist.component';

describe('BusListComponent', () => {
  let component: BusListComponent;
  let fixture: ComponentFixture<BusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
