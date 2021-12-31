import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { HomeComponent } from './home/home.component';
import { HowDoesItWorkComponent } from './how-does-it-work/how-does-it-work.component';
import { KanaTablesComponent } from './kana-tables/kana-tables.component';
import { NameToKanaComponent } from './name-to-kana/name-to-kana.component';
import { StudyHomeComponent } from './study-home/study-home.component';
import { StudyComponent } from './study/study.component';
import { WhyLearnComponent } from './why-learn/why-learn.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'study',
    component: StudyComponent,
    children: [
      {
        path: '',
        component: StudyHomeComponent,
      },
      {
        path: 'flash-cards',
        component: FlashCardsComponent,
      },
      {
        path: 'kana-tables',
        component: KanaTablesComponent,
      },
      {
        path: 'name-to-kana',
        component: NameToKanaComponent,
      },
    ],
  },
  { path: 'how-does-it-work', component: HowDoesItWorkComponent },
  { path: 'why-learn-a-language', component: WhyLearnComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
