/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../src/module';
import * as import2 from '@angular/core/src/di/injector';
class MomentModuleInjector extends import0.NgModuleInjector<import1.MomentModule> {
  _MomentModule_0:import1.MomentModule;
  constructor(parent:import2.Injector) {
    super(parent,[],[]);
  }
  createInternal():import1.MomentModule {
    this._MomentModule_0 = new import1.MomentModule();
    return this._MomentModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.MomentModule)) { return this._MomentModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MomentModuleNgFactory:import0.NgModuleFactory<import1.MomentModule> = new import0.NgModuleFactory(MomentModuleInjector,import1.MomentModule);