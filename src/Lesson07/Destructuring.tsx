import React from 'react';
import {MenType} from './07.test';

type PropsType = {
    title: string
    man: MenType
    car:Array<string>
}
export const Destructuring: React.FC<PropsType> = (props) => {
const  {title,man,...restProps} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
<div>{restProps.car}</div>
        </div>
    );
};

