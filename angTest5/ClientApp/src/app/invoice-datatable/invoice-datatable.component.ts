import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-invoice-datatable',
  templateUrl: './invoice-datatable.component.html',
  styleUrls: ['./invoice-datatable.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InvoiceDatatableComponent {
  displayedColumns = ['dateReceived', 'source', 'currentStatus', 'invoiceNumber'];

  angData: angDataPoint[];
  angDataSource: MatTableDataSource<angDataPoint>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  constructor() {
    this.angData = Array.from({ length: 100 }, (_, k) => createNewAngDataPoint(k + 1));

    this.angDataSource = new MatTableDataSource(this.angData);
  }

  ngOnInit() {
    this.angDataSource.paginator = this.paginator;
    this.angDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.angDataSource.filter = filterValue;
  }
}


export interface angDataPoint {
  dateReceived: string;
  source: string
  currentStatus: string;
  invoiceNumber: number;
  description: string;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewDate(id: number) {
  if (id > 30) {
    return id % 30;
  }
  return id;
}


/** Builds and returns a new ang data point. */
function createNewAngDataPoint(id: number): angDataPoint {

  return {
    dateReceived: 'May ' + getNewDate(id).toString(),
    source: 'ACI',
    currentStatus: 'Received',
    invoiceNumber: getRandomInt(100000,999999),
    description: 'Test ' + id.toString(),
  };
}








