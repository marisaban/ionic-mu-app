import { NgModule } from '@angular/core';
import { SubNavComponent } from './sub-nav/sub-nav';
import { ExpandableComponent } from './expandable/expandable';
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar';
@NgModule({
	declarations: [SubNavComponent,
    ExpandableComponent,
    BottomToolbarComponent],
	imports: [],
	exports: [SubNavComponent,
    ExpandableComponent,
    BottomToolbarComponent]
})
export class ComponentsModule {}
