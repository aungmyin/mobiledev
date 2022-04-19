import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'workreport',
    loadChildren: () => import('./pages/workreport/workreport.module').then( m => m.WorkreportPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'workreportdetail',
    loadChildren: () => import('./pages/workreportdetail/workreportdetail.module').then( m => m.WorkreportdetailPageModule)
  },
  {
    path: 'customerwkreport',
    loadChildren: () => import('./pages/customerwkreport/customerwkreport.module').then( m => m.CustomerwkreportPageModule)
  },
  {
    path: 'transportationexpenses',
    loadChildren: () => import('./pages/transportationexpenses/transportationexpenses.module').then( m => m.TransportationexpensesPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./pages/downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'need-help',
    loadChildren: () => import('./pages/need-help/need-help.module').then( m => m.NeedHelpPageModule)
  },
  {
    path: 'user-guide',
    loadChildren: () => import('./pages/user-guide/user-guide.module').then( m => m.UserGuidePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
