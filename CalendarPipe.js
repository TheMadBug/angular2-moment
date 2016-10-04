/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var core_1 = require('@angular/core');
var moment = require('moment');
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var CalendarPipe = (function () {
    function CalendarPipe(_cdRef, _ngZone) {
        var _this = this;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        // using a single static timer for all instances of this pipe for performance reasons
        CalendarPipe._initTimer();
        CalendarPipe._refs++;
        // values such as Today will need to be replaced with Yesterday after midnight,
        // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
        this._ngZone.runOutsideAngular(function () {
            return _this._midnightSub = CalendarPipe._midnight.subscribe(function () { return _this._cdRef.markForCheck(); });
        });
    }
    CalendarPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return momentConstructor(value).calendar();
    };
    CalendarPipe.prototype.ngOnDestroy = function () {
        if (CalendarPipe._refs > 0) {
            CalendarPipe._refs--;
        }
        if (CalendarPipe._refs === 0) {
            CalendarPipe._removeTimer();
        }
        this._midnightSub.unsubscribe();
    };
    CalendarPipe._initTimer = function () {
        // initialize the timer
        if (!CalendarPipe._midnight) {
            CalendarPipe._midnight = new core_1.EventEmitter();
            var timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
            CalendarPipe._timer = window.setTimeout(function () {
                // emit the current date
                CalendarPipe._midnight.emit(new Date());
                // refresh the timer
                CalendarPipe._removeTimer();
                CalendarPipe._initTimer();
            }, timeToUpdate);
        }
    };
    CalendarPipe._removeTimer = function () {
        if (CalendarPipe._timer) {
            window.clearTimeout(CalendarPipe._timer);
            CalendarPipe._timer = null;
            CalendarPipe._midnight = null;
        }
    };
    CalendarPipe._getMillisecondsUntilUpdate = function () {
        var now = momentConstructor();
        var tomorrow = momentConstructor().startOf('day').add(1, 'days');
        var timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000; // 1 second after midnight
    };
    /**
     * @private Internal reference counter, so we can clean up when no instances are in use
     * @type {number}
     */
    CalendarPipe._refs = 0;
    CalendarPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'amCalendar', pure: false },] },
    ];
    /** @nocollapse */
    CalendarPipe.ctorParameters = [
        { type: core_1.ChangeDetectorRef, },
        { type: core_1.NgZone, },
    ];
    return CalendarPipe;
}());
exports.CalendarPipe = CalendarPipe;
//# sourceMappingURL=CalendarPipe.js.map