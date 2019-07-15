import { Component } from 'react';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import WindowSizeService, { DEFAULT_DEBOUNCE } from '../services/window-size.service';

interface ResizeListenerProps {
	readonly onResize: (windowSize?: number | Event) => void;
	readonly debounce?: number;
}

class ResizeListener extends Component<ResizeListenerProps> {
	public static windowSizeServices = new Map<number, WindowSizeService>();

	private unsubscribe$ = new Subject();
	private windowSizeService: WindowSizeService;

	constructor( props ) {
		super( props );
		const { debounce = DEFAULT_DEBOUNCE } = props;
		const windowService = ResizeListener.windowSizeServices.get( debounce );

		if( !windowService ) {
			this.windowSizeService = new WindowSizeService( debounce );
			ResizeListener.windowSizeServices.set( debounce, this.windowSizeService )
		} else {
			this.windowSizeService = windowService;
		}
	}

	public componentDidMount() {
		const { onResize } = this.props;

		this.windowSizeService.windowSize$
			.pipe(takeUntil(this.unsubscribe$) )
			.subscribe(windowSize => {
			onResize(windowSize);
		});
	}

	public componentWillUnmount() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public render() {
		return null;
	}
}

export default ResizeListener;
