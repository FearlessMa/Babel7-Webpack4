/*
 * @Author: mhc 
 * @Date: 2018-10-09 21:20:00 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-09 21:52:52
 */

import React from 'react';
import './index.css'
import { Plane } from './plane';

export class Tabs extends React.Component {
    static Plane = Plane;
    state={
        active: 0
    }
    setActive = i=>{
        return ()=>{
            this.setState({
                active: i
            })
        }
    }

    render() {
        const { active } = this.state ;
        let headerList = [];
        const childrenList = React.Children.map(
            this.props.children,
            (child, i) => {
                headerList.push({
                    i,
                    title: child.title || 'tab'+(i+1) 
                });
                return React.cloneElement(
                    child,{ i, active}
                );
            }
        );
        headerList = headerList.map(item=><span className={ active === item.i ?'tabs-header-active' : ''} key={item.i} onClick={this.setActive(item.i)} >{item.title}</span>);
        return (
            <React.Fragment>
                <div>
                    <div className={'tabs-header'}>
                        { headerList }
                    </div>
                    <div className={'tabs-content'}>
                        { childrenList }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}