import { NgModule } from "@angular/core";
import { FormErrorComponent } from "./form-error/form-error.component";
import { IonExpandableComponent } from "./ion-expandable/ion-expandable.component";

@NgModule({
  declarations: [FormErrorComponent, IonExpandableComponent],
  imports: [],
  exports: [FormErrorComponent, IonExpandableComponent]
})
export class ComponentsModule {}
