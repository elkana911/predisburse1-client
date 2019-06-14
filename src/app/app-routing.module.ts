import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcpProcessComponent } from './pcp-process/pcp-process.component';
import { PcpProcessGridComponent } from './pcp-process-grid/pcp-process-grid.component';

const routes: Routes = [
  { path:'', component: PcpProcessGridComponent},
  { path:'pcpuploads', component: PcpProcessGridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
