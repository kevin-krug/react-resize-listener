# TS React Resize Listener

A React component written in Typescript which abstracts resize handling. The resize handler will only be called after a distinct resize change and will be debounced to limit the execution rate (default debounce time is 250ms). A custom debounce time can be added as an optional prop.

## Setup

`npm install`

## Usage

Simply render the ResizeListener Component as a child of the Component you would like to add resize handling to in your React Typescript project.

```jsx
import React, {Component} from "react";
import ResizeListener from 'react-resize-listener';

export default class ComponentWithResizeHandling extends Component<Props> {

	public render() {
		return (
			<div>
				<ResizeListener onResize={this.onResize} />
				...
			</div>
		);
	}
	...

	private onResize = () => {
		...
	};
}
```

### Props


| Prop | Description | Required | Default |
| :---         |     :---:      |     :---:      |         ---: |
| onResize | the resize handler; called with window inner width | true    | none
| debounce | the debounce time in milliseconds | false  | 250


## Tests

`npm run test`

## Contributing

is welcome!
