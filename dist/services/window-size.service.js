import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
export var DEFAULT_DEBOUNCE = 250;
var WindowSizeService = /** @class */ (function () {
    function WindowSizeService(debounce) {
        if (debounce === void 0) { debounce = DEFAULT_DEBOUNCE; }
        this.windowSize$ = fromEvent(window, 'resize').pipe(debounceTime(debounce), map(function () { return window.innerWidth; }), distinctUntilChanged());
    }
    return WindowSizeService;
}());
export { WindowSizeService };
export default WindowSizeService;
//# sourceMappingURL=window-size.service.js.map