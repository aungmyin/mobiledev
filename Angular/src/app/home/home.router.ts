import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/messages/messages.module').then(
                m => m.MessagesPageModule
              )
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/notifications/notifications.module').then(
                m => m.NotificationsPageModule
              )
          }
        ]
      },
      {
        path: 'workreport',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/workreport/workreport.module').then(
                m => m.WorkreportPageModule
              )
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/settings/settings.module').then(
                m => m.SettingsPageModule
              )
          }
        ]
      },
      {
        path: 'changepassword',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/changepassword/changepassword.module').then(
                m => m.ChangepasswordPageModule
              )
          }
        ]
      },
      {
        path: 'client',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/client/client.module').then(
                m => m.ClientPageModule
              )
          }
        ]
      },
      {
        path: 'customerwkreport',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/customerwkreport/customerwkreport.module').then(
                m => m.CustomerwkreportPageModule
              )
          }
        ]
      },
      {
        path: 'transportationexpenses',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transportationexpenses/transportationexpenses.module').then(
                m => m.TransportationexpensesPageModule
              )
          }
        ]
      },
      {
        path: 'workreportdetail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/workreportdetail/workreportdetail.module').then(
                m => m.WorkreportdetailPageModule
              )
          }
        ]
      },
      {
        path: 'edit-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/edit-profile/edit-profile.module').then(
                m => m.EditProfilePageModule
              )
          }
        ]
      },
      {
        path: 'downloads',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/downloads/downloads.module').then(
                m => m.DownloadsPageModule
              )
          }
        ]
      },
      {
        path: 'help',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/need-help/need-help.module').then(
                m => m.NeedHelpPageModule
              )
          }
        ]
      },
      {
        path: 'user-guide',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/user-guide/user-guide.module').then(
                m => m.UserGuidePageModule
              )
          }
        ]
      },
      {
        path: 'faq',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/faq/faq.module').then(
                m => m.FaqPageModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/feed',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
