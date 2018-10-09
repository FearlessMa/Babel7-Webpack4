/*
 * @Author: mhc 
 * @Date: 2018-10-09 21:32:14 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-09 21:51:54
 */

import React from 'react';

export const Plane = props=>{
    const { active , i=0 } = props;
    return (
        <React.Fragment>
            <div className={active === i ?'active' : ''}>{ props.children }</div>
        </React.Fragment>
    )
}