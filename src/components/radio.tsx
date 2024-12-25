"use client"
import type { RadioChangeEvent } from 'antd';

import { Radio as AntRadio } from 'antd';


import { v4 as uuidv4 } from "uuid";




export const Radio = ({ value='active radio', data, handleChange = () => { } }: any) => {



    const onChange = (e: RadioChangeEvent) => {
        handleChange(e)
    };


    return (
        <AntRadio.Group onChange={onChange} value={value}>

            {data && data?.map((singleItem: any) => (
                <AntRadio key={uuidv4()} value={singleItem.value} checked defaultChecked>{singleItem.label}</AntRadio>
            ))}

        </AntRadio.Group>
    );
};