import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';

import App from './App';

let container = null;
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

act(() => {
	render(<App />, container);
});

it('renders a button', () => {
	expect(container.contains(<button />)).toBeTruthy();
});

it('renders a button with default value `ON`', () => {
	expect(container.querySelector('button').value).toBe('ON');
});

act(() => {
	render(<App />, container);
	container.querySelector('button').onclick();
});

it('renders a button with the value switched to `OFF`', () => {
	expect(container.querySelector('button').value).toBe('OFF');
});
