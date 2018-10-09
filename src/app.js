/*
 * @Author: mhc 
 * @Date: 2018-10-09 21:24:10 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-09 21:35:08
 */

import React from 'react';
import { Tabs } from 'component/tabs'

export const App = ()=>{
    return (
        <React.Fragment>
            <Tabs>
                <Tabs.Plane>1</Tabs.Plane>
                <Tabs.Plane>2</Tabs.Plane>
                <Tabs.Plane>3</Tabs.Plane>
            </Tabs>
        </React.Fragment>
    )
}