import { NgModule } from '@angular/core';
import { SubNavComponent } from './sub-nav/sub-nav';
import { ExpandableComponent } from './expandable/expandable';
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar';
import { NewUserHeaderComponent } from './new-user-header/new-user-header';
@NgModule({
	declarations: [SubNavComponent,
    ExpandableComponent,
    BottomToolbarComponent,
    NewUserHeaderComponent],
	imports: [],
	exports: [SubNavComponent,
    ExpandableComponent,
    BottomToolbarComponent,
    NewUserHeaderComponent]
})
export class ComponentsModule {}
