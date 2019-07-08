import { Component } from 'react';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import windowSizeService from '../services/window-size.service';

interface ResizeListenerProps {
	readonly onResize: (windowSize?: number | Event) => void;
	readonly debounce?: number;
}

class ResizeListener extends Component<ResizeListenerProps> {
	private unsubscribe$ = new Subject();

	public componentDidMount() {
		const { onResize, debounce } = this.props;

		if( debounce ){
			windowSizeService.init(debounce);
		}

		windowSizeService.windowSize$
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
