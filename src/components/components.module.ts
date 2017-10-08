import { NgModule } from '@angular/core';
import { SubNavComponent } from './sub-nav/sub-nav';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
	declarations: [SubNavComponent,
    ExpandableComponent],
	imports: [],
	exports: [SubNavComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
