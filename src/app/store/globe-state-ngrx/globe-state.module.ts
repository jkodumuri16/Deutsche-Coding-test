import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { globeReducer } from './globe.reducer';


@NgModule({
    imports: [
        StoreModule.forFeature('globe', globeReducer)
    ],
    exports: [StoreModule]
})
export class GlobeStoreModule { }