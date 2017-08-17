import React from 'react';
import {render} from 'react-dom';
import add from './modules/add';
import Test from './components/test';
import './styles-global/style.css';

const mountNode = document.getElementById('root');

const a = 2;
const b = 3;

render(<Test result={add(a, b)} />, mountNode);
