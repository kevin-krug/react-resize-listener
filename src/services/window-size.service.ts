import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

export class WindowSizeService {
    public windowSize$: Observable<number>;

    constructor() {
        this.init(250);
    }

    public init = (debounce) => {
        this.windowSize$ = fromEvent(window, 'resize').pipe(
            debounceTime(debounce),
            map(() => window.innerWidth),
            distinctUntilChanged()
        );
    }
}

const windowSizeService = new WindowSizeService();

export default windowSizeService;
