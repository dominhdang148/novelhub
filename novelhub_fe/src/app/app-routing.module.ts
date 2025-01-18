import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./features/tags/tags.module').then((m) => m.TagsModule),
  },
  {
    path: 'updates',
    loadChildren: () =>
      import('./features/updates/updates.module').then((m) => m.UpdatesModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./features/categories/categories.module').then(
        (m) => m.CategoriesModule,
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'dmca',
    loadChildren: () =>
      import('./features/dmca/dmca.module').then((m) => m.DmcaModule),
  },
  {
    path: 'term-of-service',
    loadChildren: () =>
      import('./features/termofservice/termofservice.module').then(
        (m) => m.TermofserviceModule,
      ),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./features/policy/policy.module').then((m) => m.PolicyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
