import { Observable } from 'rxjs';
export declare const DEFAULT_DEBOUNCE = 250;
export declare class WindowSizeService {
    windowSize$: Observable<number>;
    constructor(debounce?: number);
}
export default WindowSizeService;
