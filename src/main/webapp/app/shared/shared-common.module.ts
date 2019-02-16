import { NgModule } from '@angular/core';

import { AghpracainzynierskaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AghpracainzynierskaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AghpracainzynierskaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AghpracainzynierskaSharedCommonModule {}
