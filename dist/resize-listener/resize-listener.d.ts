import { Component } from 'react';
import WindowSizeService from '../services/window-size.service';
interface ResizeListenerProps {
    readonly onResize: (windowSize?: number | Event) => void;
    readonly debounce?: number;
}
declare class ResizeListener extends Component<ResizeListenerProps> {
    static windowSizeServices: Map<number, WindowSizeService>;
    private unsubscribe$;
    private windowSizeService;
    constructor(props: ResizeListenerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
export default ResizeListener;
