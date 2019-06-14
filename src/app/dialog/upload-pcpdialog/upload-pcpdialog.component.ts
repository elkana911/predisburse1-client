import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Moment } from 'moment';
import { LovAgreementdialogComponent } from '../lov/lov-agreementdialog/lov-agreementdialog.component';
import { Constants } from 'src/app/constants';
import { LovSchemedialogComponent } from '../lov/lov-schemedialog/lov-schemedialog.component';

@Component({
  selector: 'app-upload-pcpdialog',
  templateUrl: './upload-pcpdialog.component.html',
  styleUrls: ['./upload-pcpdialog.component.css']
})
export class UploadPCPDialogComponent implements OnInit {

  SERVER_URL = "http://localhost:8090/api/upload_form_file";
  uploadForm: FormGroup;

  // public static KEY_FILE_KONTRAK = 'fileKontrak';

  submitted = false;
  myFilter = (d: Moment): boolean => {
    const day = d.day();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, public dialog: MatDialog) { }

  // convenience getter for easy access to form fields
  get f() { return this.uploadForm.controls; }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      w_input_agreement: ['', Validators.required],
      r_mf_short_desc: [''],
      r_mf_coy_id: [''],
      r_mf_full_name: [''],
      r_scheme: ['', Validators.required],
      r_scheme_desc: [''],
      w_no_surat: ['', Validators.required],
      w_tgl_surat: ['', Validators.required],
      fileKontrak: ['', Validators.required],
      // fileObject: [''],
      // fileEndUser: [''],
      // filePengurus: [''],
      emailinput: ['', [Validators.required, Validators.email]],
    });
  }

  onFileSelect(event, form_key) {
    if (event.target.files.length < 1)
      return;

    const file = event.target.files[0];
    this.uploadForm.get(form_key).setValue(file);
  }

  onFileKontrakSelect(event) {
    this.onFileSelect(event, Constants.FORM_PCP_UPLOAD_KEY_FILE_KONTRAK);
  }

  onFileObjectSelect(event) {
    this.onFileSelect(event, Constants.FORM_PCP_UPLOAD_KEY_FILE_OBJECT);
  }
  onFileEndUserSelect(event) {
    this.onFileSelect(event, Constants.FORM_PCP_UPLOAD_KEY_FILE_ENDUSER);
  }
  onFilePengurusSelect(event) {
    this.onFileSelect(event, Constants.FORM_PCP_UPLOAD_KEY_FILE_PENGURUS);
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.uploadForm.invalid) {
      return;
    }

    const formData = new FormData();

    formData.append('file', this.uploadForm.get(Constants.FORM_PCP_UPLOAD_KEY_FILE_KONTRAK).value);
    formData.append('email', this.uploadForm.get('emailinput').value);
    // console.log('email adalah ' + this.uploadForm.get('emailinput').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => { throw err } // this.handleError(err)
    );
  }

  showLOVAgreement() {

    let dialogRef = this.dialog.open(LovAgreementdialogComponent, {
      disableClose: true,
      // width: '250px',knxbdx
      //data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The showLOVAgreement was closed ' + JSON.stringify(result));

      if (!result) return;

      // this.animal = result;
      //["RFOMA","OMA","6028BZ","PT. OTO MULTIARTHA"]
      this.uploadForm.get('w_input_agreement').setValue(result[0]);
      this.uploadForm.get('r_mf_short_desc').setValue(result[1]);
      this.uploadForm.get('r_mf_coy_id').setValue(result[2]);
      this.uploadForm.get('r_mf_full_name').setValue(result[3]);
      
    });
  }

  showLOVScheme() {

    let dialogRef = this.dialog.open(LovSchemedialogComponent, {
      disableClose: true,
      // width: '250px',knxbdx
      //data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The showLOVScheme was closed ' + JSON.stringify(result));

      if (!result) return;
      // [["OMA TEMP","OMA TEMPLATE"]]
      this.uploadForm.get('r_scheme').setValue(result[0]);
      this.uploadForm.get('r_scheme_desc').setValue(result[1]);
      
    });
  }

}
