import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AccessStrategyComponent} from './access-strategy.component';
import {DelegatedComponent} from './delegated/delegated.component';
import {GroovyComponent} from './groovy/groovy.component';
import {GrouperComponent} from './grouper/grouper.component';
import {RemoteComponent} from './remote/remote.component';
import {RequiredComponent} from './required/required.component';
import {SurrogateComponent} from './surrogate/surrogate.component';
import {TimeComponent} from './time/time.component';
import {TypeComponent} from './type/type.component';
import {AttributemappingModule} from '../attributemapping/attributemapping.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AttributemappingModule
  ],
  declarations: [
    AccessStrategyComponent,
    DelegatedComponent,
    GroovyComponent,
    GrouperComponent,
    RemoteComponent,
    RequiredComponent,
    SurrogateComponent,
    TimeComponent,
    TypeComponent
  ],
  exports: [
    AccessStrategyComponent,
    DelegatedComponent,
    GroovyComponent,
    GrouperComponent,
    RemoteComponent,
    RequiredComponent,
    SurrogateComponent,
    TimeComponent,
    TypeComponent
  ]
})

export class AccessStrategyModule {}