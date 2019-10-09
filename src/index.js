import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accordion from './Accordion';
import sections from './sections';

ReactDOM.render(<Accordion sections={sections} />, document.getElementById('root'));
