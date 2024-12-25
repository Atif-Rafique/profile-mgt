"use client"
import { Checkbox as AntCheckbox } from 'antd';


export const Checkbox = ({ title = 'Checkbox' }: any) => {



    return (
        <AntCheckbox checked={title === 'Active check box' ? true : false}>
            {title}
        </AntCheckbox>
    );
};