/*
 * @Author: mhc 
 * @Date: 2018-10-08 20:56:22 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-09 21:23:56
 */

console.log(process,'process')
console.log(process.env,'process.env')
console.log(process.env.NODE_ENV,'process.env.NODE_ENV')

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root') 
);