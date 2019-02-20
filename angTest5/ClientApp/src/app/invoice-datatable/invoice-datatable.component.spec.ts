import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDatatableComponent } from './invoice-datatable.component';

describe('InvoiceDatatableComponent', () => {
  let component: InvoiceDatatableComponent;
  let fixture: ComponentFixture<InvoiceDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
