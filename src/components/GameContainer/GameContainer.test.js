import React from 'react';
import ReactDOM from 'react-dom';
import App from './GameContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameContainer />, div);
});
