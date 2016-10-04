/// <reference types="moment" />
import { ChangeDetectorRef, PipeTransform, OnDestroy, NgZone } from '@angular/core';
import * as moment from 'moment';
export declare class TimeAgoPipe implements PipeTransform, OnDestroy {
    private _cdRef;
    private _ngZone;
    private _currentTimer;
    constructor(_cdRef: ChangeDetectorRef, _ngZone: NgZone);
    transform(value: Date | moment.Moment, omitSuffix?: boolean): string;
    ngOnDestroy(): void;
    _removeTimer(): void;
    _getSecondsUntilUpdate(momentInstance: moment.Moment): number;
}