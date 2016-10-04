"use strict";
var core_1 = require('@angular/core');
var CalendarPipe_1 = require('./CalendarPipe');
var DateFormatPipe_1 = require('./DateFormatPipe');
var DurationPipe_1 = require('./DurationPipe');
var FromUnixPipe_1 = require('./FromUnixPipe');
var TimeAgoPipe_1 = require('./TimeAgoPipe');
var DifferencePipe_1 = require('./DifferencePipe');
var ANGULAR_MOMENT_PIPES = [CalendarPipe_1.CalendarPipe, DateFormatPipe_1.DateFormatPipe, DurationPipe_1.DurationPipe, FromUnixPipe_1.FromUnixPipe, TimeAgoPipe_1.TimeAgoPipe, DifferencePipe_1.DifferencePipe];
var MomentModule = (function () {
    function MomentModule() {
    }
    MomentModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: ANGULAR_MOMENT_PIPES,
                    exports: ANGULAR_MOMENT_PIPES
                },] },
    ];
    /** @nocollapse */
    MomentModule.ctorParameters = [];
    return MomentModule;
}());
exports.MomentModule = MomentModule;
//# sourceMappingURL=module.js.map