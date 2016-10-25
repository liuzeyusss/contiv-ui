/**
 * Created by vjain3 on 10/21/16.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DirectivesModule } from "../components/directives/directives.module";
import { PipesModule } from "../components/pipes/pipes.module";
import { ApplicationGroupCreateComponent } from "./applicationgroupcreatectrl";
import { ApplicationGroupDetailsComponent } from "./applicationgroupdetailsctrl";
import { IsolationPolicySelectionComponent } from "./isolationpolicydirective";
import { BandwidthPolicySelectionComponent } from "./bandwidthpolicydirective";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DirectivesModule,
        PipesModule
    ],
    declarations: [
        ApplicationGroupCreateComponent,
        ApplicationGroupDetailsComponent,
        IsolationPolicySelectionComponent,
        BandwidthPolicySelectionComponent
    ],
    exports: [
        ApplicationGroupCreateComponent,
        ApplicationGroupDetailsComponent,
        IsolationPolicySelectionComponent,
        BandwidthPolicySelectionComponent,
        FormsModule,
        CommonModule,
        DirectivesModule,
        PipesModule
    ]
})
export class ApplicationGroupsModule {}