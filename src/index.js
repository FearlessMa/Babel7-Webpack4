/*
 * @Author: mhc 
 * @Date: 2018-10-08 20:56:22 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-08 22:06:38
 */

console.log(process,'process')
console.log(process.env,'process.env')
console.log(process.env.NODE_ENV,'process.env.NODE_ENV')

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>react</div>,
    document.getElementById('root') 
);