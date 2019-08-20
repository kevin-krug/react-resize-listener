import React from 'react';
import { mount } from 'enzyme';
import ResizeListener from '../resize-listener';

interface EventCallBackMap {
    resize?: () => void;
}

let removeMap: EventCallBackMap = {};
let addMap: EventCallBackMap = {};

window.addEventListener = jest.fn((event, cb) => {
	addMap[event] = cb;
});
window.removeEventListener = jest.fn((event, cb) => {
	removeMap[event] = cb;
});

describe('ResizeListener', () => {
	beforeEach(()=>{
		addMap = {};
		removeMap = {};
	});

	it('should add the onResize callback prop as resize event listener on mount', () => {
		// Setup
		const mockOnResize = jest.fn();

		// Envoke
		mount(<ResizeListener onResize={mockOnResize} />);

		// Assert
		expect(addMap).toHaveProperty('resize');

	});

	it('should remove the onResize callback prop as resize event listener on unmount', () => {
		// Setup
		const mockOnResize = jest.fn();

		// Envoke
		const wrapper = mount(<ResizeListener onResize={mockOnResize} />);
		wrapper.unmount();

		// Assert
		expect(removeMap).toHaveProperty('resize');
	});
});
