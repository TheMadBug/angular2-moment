/* angular2-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
"use strict";
var core_1 = require('@angular/core');
var moment = require('moment');
// under systemjs, moment is actually exported as the default export, so we account for that
var momentConstructor = moment.default || moment;
var TimeAgoPipe = (function () {
    function TimeAgoPipe(_cdRef, _ngZone) {
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value, omitSuffix) {
        var _this = this;
        var momentInstance = momentConstructor(value);
        this._removeTimer();
        var timeToUpdate = this._getSecondsUntilUpdate(momentInstance) * 1000;
        this._currentTimer = this._ngZone.runOutsideAngular(function () {
            return window.setTimeout(function () { return _this._cdRef.markForCheck(); }, timeToUpdate);
        });
        return momentConstructor(value).from(momentConstructor(), omitSuffix);
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this._removeTimer();
    };
    TimeAgoPipe.prototype._removeTimer = function () {
        if (this._currentTimer) {
            window.clearTimeout(this._currentTimer);
            this._currentTimer = null;
        }
    };
    TimeAgoPipe.prototype._getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(momentConstructor().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    TimeAgoPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'amTimeAgo', pure: false },] },
    ];
    /** @nocollapse */
    TimeAgoPipe.ctorParameters = [
        { type: core_1.ChangeDetectorRef, },
        { type: core_1.NgZone, },
    ];
    return TimeAgoPipe;
}());
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=TimeAgoPipe.js.map