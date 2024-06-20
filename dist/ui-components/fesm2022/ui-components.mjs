import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class UiComponentsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: UiComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: UiComponentsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: UiComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class UiComponentsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: UiComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.3", type: UiComponentsComponent, isStandalone: true, selector: "lib-ui-components", ngImport: i0, template: `
    <p>
      ui-components works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: UiComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ui-components', standalone: true, imports: [], template: `
    <p>
      ui-components works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of ui-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UiComponentsComponent, UiComponentsService };
//# sourceMappingURL=ui-components.mjs.map
