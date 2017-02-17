import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { GameName } from '../pages/Questions/CreateGame/GameName/GameName';
import { GamePossibility } from '../pages/Questions/CreateGame/GamePossibility/GamePossibility';
import { LifeArea } from '../pages/Questions/CreateGame/LifeArea/LifeArea';
import { ByWhen } from '../pages/Questions/CreateGame/ByWhen/ByWhen';
import { ConditionOfMilestones } from '../pages/Questions/CreateGame/ConditionOfMilestones/ConditionOfMilestones';
import { FinalResult } from '../pages/Questions/CreateGame/FinalResult/FinalResult';
import { NumberOfMilestones } from '../pages/Questions/CreateGame/NumberOfMilestones/NumberOfMilestones';
import { Outcome } from '../pages/Questions/CreateGame/Outcome/Outcome'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    GameName,
    GamePossibility,
    LifeArea,
    ByWhen,
    ConditionOfMilestones,
    FinalResult,
    NumberOfMilestones,
    Outcome,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    GameName,
    GamePossibility,
    LifeArea,
    ByWhen,
    ConditionOfMilestones,
    FinalResult,
    NumberOfMilestones,
    Outcome,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
