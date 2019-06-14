import { Component, OnInit, Inject } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { PCPServiceService } from 'src/app/service/pcpservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-lov-schemedialog',
  templateUrl: './lov-schemedialog.component.html',
  styleUrls: ['./lov-schemedialog.component.css']
})
export class LovSchemedialogComponent implements OnInit {

  rowData = [];
  gridOptions: GridOptions;

  constructor(private pcpService: PCPServiceService, public dialogRef: MatDialogRef<LovSchemedialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) { 
    this.gridOptions = {
      // enable sorting on all columns by default
      defaultColDef: {
        sortable: true,
        filter: true,        
      },
      columnDefs: [
        { headerName: 'SCHEME', field: '0' },
        { headerName: 'DESCRIPTION', field: '1' },
      ],
      pagination: true,
      domLayout: 'print',
      rowSelection: 'single',
      onGridReady: this.onGridReady,
    }
  }

  ngOnInit() {
    this.pcpService.getLOVScheme().subscribe(
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
