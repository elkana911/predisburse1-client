import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatInputModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcpProcessComponent } from './pcp-process/pcp-process.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { PcpProcessGridComponent } from './pcp-process-grid/pcp-process-grid.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { LovAgreementdialogComponent } from './dialog/lov/lov-agreementdialog/lov-agreementdialog.component';
import { UploadPCPDialogComponent } from './dialog/upload-pcpdialog/upload-pcpdialog.component';
import { LovSchemedialogComponent } from './dialog/lov/lov-schemedialog/lov-schemedialog.component';
import { PCPServiceService } from './service/pcpservice.service';
import { HttpClientModule } from '@angular/common/http';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    PcpProcessComponent,
    HeaderComponent,
    FooterComponent,
    UploadPCPDialogComponent,
    LovAgreementdialogComponent,
    PcpProcessGridComponent,
    LovSchemedialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    UploadPCPDialogComponent,
    LovAgreementdialogComponent,
    LovSchemedialogComponent
  ],
  providers: [PCPServiceService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
