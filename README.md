# TS React Resize Listener

A React component written in Typescript which abstracts resize handling. The resize handler will only be called after a distinct resize change and will be debounced to limit the execution rate (default debounce time is 250ms). A custom debounce time can be added as an optional prop individually for each component.

## Installation

`npm i ts-react-resize-listener`

## Usage / API

Simply render the ResizeListener Component as a child of the Component you would like to add resize handling to in your React project (written in jsx or tsx).

```jsx
import React, {Component} from 'react';
import ResizeListener from 'ts-react-resize-listener';

export default class ComponentWithResizeHandling extends Component<Props> {

	public render() {
		return (
			<div>
			    <ResizeListener
				    onResize={this.onResize}
				    debounce={100} />
				...
			</div>
		);
	}
	...

	private onResize = (windowInnerWidth) => {
		...
	};
}
```

### Props


| Prop | Description | Required | Default |
| :---         |     :---:      |     :---:      |         ---: |
| onResize | the resize handler; called with window inner width | true    | none
| debounce | the debounce time in milliseconds | false  | 250

## Performance

For performance reasons a singleton pattern is implemented to only register a single event listener (/create a single windowSize observable) for each individual debounce time shared among all components rendering
the ResizeListener component (with the same debounce value).

## Setup

`npm i`

## Tests

`npm run test`

## Contributing

is welcome!
