import { Component, OnInit } from '@angular/core';
import { PCPServiceService } from '../service/pcpservice.service';
import { MatDialog } from '@angular/material';
import { PCPUploadResult } from '../pcpupload-result';
import { GridOptions } from 'ag-grid-community';
import { UploadPCPDialogComponent } from '../dialog/upload-pcpdialog/upload-pcpdialog.component';

@Component({
  selector: 'app-pcp-process-grid',
  templateUrl: './pcp-process-grid.component.html',
  styleUrls: ['./pcp-process-grid.component.css']
})
export class PcpProcessGridComponent implements OnInit {
  stopWatch: number = 0.005;
  pcpUploads: PCPUploadResult[];
  gridOptions: GridOptions;
  showSpinner: boolean = true;
  columnDefs;
  style = {
    marginLeft: '20px',
    marginTop: '20px',
    marginRight: '20px',
    // width: '100%',
    height: '400px',
    boxSizing: 'border-box'
};

  constructor(private pcpService: PCPServiceService, private dialog: MatDialog) { 
    
    this.columnDefs = [
      { headerName: 'Session No', field: 'pcp.sessionNo' },
      { headerName: 'Agreement', field: 'pcp.agmtShortname' , width: 90},
      { headerName: '', field: 'mfShortName' , width: 90},
      { headerName: 'Multi Finance', field: 'mfFullName', width: 110 },
      { headerName: 'Scheme', field: 'pcp.scheme', width: 90},
      { headerName: 'No Surat', field: 'pcp.letterNo', width: 120 },
      { headerName: 'Status', field: 'pcp.status'},
    ];

    this.gridOptions = {
      // enable sorting on all columns by default
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
      },
      pagination: true,
      // domLayout: "print",
      rowSelection: 'single',
    }    

  }

  ngOnInit() {
    this.refreshGrid();
  }

  onGridReady(params) {
    // this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  refreshGrid(){
    this.showSpinner = true;
    this.pcpService.getPCPUploads().subscribe(
      response => { this.pcpUploads = response; },
      error => {
        this.showSpinner = false;
      },
      () => {
        this.showSpinner = false;
    
      }
    );

  }

  uploadFile(): void {
    const dialogRef = this.dialog.open(UploadPCPDialogComponent, {
      height: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.refreshGrid();
    });

  }
}
