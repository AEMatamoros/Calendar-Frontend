import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';

import './styles.css';
// import env from "react-dotenv";
// console.log(env.API_URL)
ReactDOM.render(
    <CalendarApp />,
  document.getElementById('root')
);
