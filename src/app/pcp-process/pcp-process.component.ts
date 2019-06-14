import { Component, OnInit } from '@angular/core';
import { PCPServiceService } from '../service/pcpservice.service';
import { PCPUploadResult } from '../pcpupload-result';
import { MatDialog } from '@angular/material';
import { UploadPCPDialogComponent } from '../dialog/upload-pcpdialog/upload-pcpdialog.component';

@Component({
  selector: 'app-pcp-process',
  templateUrl: './pcp-process.component.html',
  styleUrls: ['./pcp-process.component.css']
})
export class PcpProcessComponent implements OnInit {

  pcpUploads: PCPUploadResult[];
  showSpinner: boolean = true;

  constructor(private pcpService: PCPServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    
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
      //  width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }


}