import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

class HeroComponent {
    constructor() {
        this.title = "";
        this.description = "";
        this.secondHeader = "";
        this.CTALink = "";
        this.CTAText = "";
        this.CTA2Link = "";
        this.CTA2Text = "";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.3", type: HeroComponent, isStandalone: true, selector: "uic-hero", inputs: { title: "title", description: "description", secondHeader: "secondHeader", CTALink: "CTALink", CTAText: "CTAText", CTA2Link: "CTA2Link", CTA2Text: "CTA2Text" }, ngImport: i0, template: "<div class=\"bg-white h-full\">\n    <div class=\"relative isolate px-6 pt-14 lg:px-8\">\n     <div class=\"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80\" aria-hidden=\"true\">\n       <div class=\"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#43b600] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]\" style=\"clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)\"></div>\n     </div>\n     <div class=\"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56\">\n       <div class=\"hidden sm:mb-8 sm:flex sm:justify-center\">\n         <div class=\"relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20\">\n           {{secondHeader}} <a href={{CTA2Link}} class=\"font-semibold text-primary\"><span class=\"absolute inset-0\" aria-hidden=\"true\"></span>{{CTA2Text}}<span aria-hidden=\"true\">&rarr;</span></a>\n         </div>\n       </div>\n       <div class=\"text-center\">\n         <h1 class=\"text-3xl font-bold tracking-tight text-primary sm:text-6xl\">{{title}}</h1>\n         <p class=\"mt-6 text-lg leading-8 text-gray-600\">{{description}}</p>\n         <div class=\"mt-10 flex items-center justify-center gap-x-6\">\n           <a href=\"{{CTALink}}\" class=\"rounded-md bg-primary px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\">{{CTAText}}</a>\n         </div>\n       </div>\n     </div>\n     <div class=\"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]\" aria-hidden=\"true\">\n       <div class=\"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#43b600] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]\" style=\"clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)\"></div>\n     </div>\n   </div>\n </div>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uic-hero', standalone: true, imports: [], template: "<div class=\"bg-white h-full\">\n    <div class=\"relative isolate px-6 pt-14 lg:px-8\">\n     <div class=\"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80\" aria-hidden=\"true\">\n       <div class=\"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#43b600] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]\" style=\"clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)\"></div>\n     </div>\n     <div class=\"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56\">\n       <div class=\"hidden sm:mb-8 sm:flex sm:justify-center\">\n         <div class=\"relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20\">\n           {{secondHeader}} <a href={{CTA2Link}} class=\"font-semibold text-primary\"><span class=\"absolute inset-0\" aria-hidden=\"true\"></span>{{CTA2Text}}<span aria-hidden=\"true\">&rarr;</span></a>\n         </div>\n       </div>\n       <div class=\"text-center\">\n         <h1 class=\"text-3xl font-bold tracking-tight text-primary sm:text-6xl\">{{title}}</h1>\n         <p class=\"mt-6 text-lg leading-8 text-gray-600\">{{description}}</p>\n         <div class=\"mt-10 flex items-center justify-center gap-x-6\">\n           <a href=\"{{CTALink}}\" class=\"rounded-md bg-primary px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\">{{CTAText}}</a>\n         </div>\n       </div>\n     </div>\n     <div class=\"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]\" aria-hidden=\"true\">\n       <div class=\"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#43b600] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]\" style=\"clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)\"></div>\n     </div>\n   </div>\n </div>" }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], secondHeader: [{
                type: Input
            }], CTALink: [{
                type: Input
            }], CTAText: [{
                type: Input
            }], CTA2Link: [{
                type: Input
            }], CTA2Text: [{
                type: Input
            }] } });

class HeroModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: HeroModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.3", ngImport: i0, type: HeroModule, imports: [CommonModule,
            HeroComponent], exports: [HeroComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: HeroModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: HeroModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        HeroComponent
                    ],
                    exports: [HeroComponent]
                }]
        }] });

/*
 * Public API Surface of ui-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeroComponent, HeroModule, UiComponentsComponent, UiComponentsService };
//# sourceMappingURL=ui-components.mjs.map
