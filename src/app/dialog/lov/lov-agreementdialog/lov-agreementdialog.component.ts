import { Component, OnInit, Inject } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { PCPServiceService } from 'src/app/service/pcpservice.service';

@Component({
  selector: 'app-lov-agreementdialog',
  templateUrl: './lov-agreementdialog.component.html',
  styleUrls: ['./lov-agreementdialog.component.css']
})
export class LovAgreementdialogComponent implements OnInit {

  rowData = [];
  gridOptions: GridOptions;

  constructor(private pcpService: PCPServiceService, public dialogRef: MatDialogRef<LovAgreementdialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) { }

  ngOnInit() {
    
    this.pcpService.getLOVAgreements().subscribe(
      response => { this.rowData = response; 
        console.log(JSON.stringify(response));
      },
      error => {
       // this.showSpinner = false;
      },
      () => {
       // this.showSpinner = false;
      }
    );
    
    // this.rowData = [
    //   { make: 'Toyota', model: 'Celica', price: 35000 },
    //   { make: 'Ford', model: 'Mondeo', price: 32000 },
    //   { make: 'Porsche', model: 'Boxter', price: 72000 }
    // ];

    this.gridOptions = {
      // enable sorting on all columns by default
      defaultColDef: {
        sortable: true,
        filter: true,        
      },
      columnDefs: [
        { headerName: 'AGR_SHORTNAME', field: '0' },
        { headerName: 'SHORTNAME', field: '1' },
        { headerName: 'MFCOY_ID', field: '2' },
        { headerName: 'NAME', field: '3' }
      ],
      pagination: true,
      domLayout: 'print',
      rowSelection: 'single',
      onGridReady: this.onGridReady,
    }
  }

  onGridReady(params) {
    // this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
  }

  onDoubleClicked(row){
    console.log('double click ' + JSON.stringify(row.data));

    this.dialogRef.close(row.data);
  }

  onSearch(value){ 
    this.gridOptions.api.setQuickFilter(value);
  }
  onKey(value: string){
    this.onSearch(value);
  }

}
