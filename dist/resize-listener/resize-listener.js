import * as tslib_1 from "tslib";
import { Component } from 'react';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import WindowSizeService, { DEFAULT_DEBOUNCE } from '../services/window-size.service';
var ResizeListener = /** @class */ (function (_super) {
    tslib_1.__extends(ResizeListener, _super);
    function ResizeListener(props) {
        var _this = _super.call(this, props) || this;
        _this.unsubscribe$ = new Subject();
        var _a = props.debounce, debounce = _a === void 0 ? DEFAULT_DEBOUNCE : _a;
        var windowService = ResizeListener.windowSizeServices.get(debounce);
        if (!windowService) {
            _this.windowSizeService = new WindowSizeService(debounce);
            ResizeListener.windowSizeServices.set(debounce, _this.windowSizeService);
        }
        else {
            _this.windowSizeService = windowService;
        }
        return _this;
    }
    ResizeListener.prototype.componentDidMount = function () {
        var onResize = this.props.onResize;
        this.windowSizeService.windowSize$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(function (windowSize) {
            onResize(windowSize);
        });
    };
    ResizeListener.prototype.componentWillUnmount = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    ResizeListener.prototype.render = function () {
        return null;
    };
    ResizeListener.windowSizeServices = new Map();
    return ResizeListener;
}(Component));
export default ResizeListener;
//# sourceMappingURL=resize-listener.js.map