import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

export const DEFAULT_DEBOUNCE = 250;

export class WindowSizeService {
    public windowSize$: Observable<number>;

    constructor( debounce = DEFAULT_DEBOUNCE ) {
        this.windowSize$ = fromEvent(window, 'resize').pipe(
            debounceTime(debounce),
            map(() => window.innerWidth),
            distinctUntilChanged()
        );
    }
}

export default WindowSizeService;
