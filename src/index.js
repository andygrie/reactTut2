import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import HelloWorld from './components/HelloWorld';
import HelloUser from './components/HelloUser';
import Friends from './components/Friends';

// ReactDOM.render(<HelloUser username="andygrie" />, document.getElementById('root'));
ReactDOM.render(<Friends />, document.getElementById('root'));