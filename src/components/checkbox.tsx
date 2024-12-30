"use client"
import { Checkbox as AntCheckbox } from 'antd';


export const Checkbox = ({ title = 'Checkbox', className }: any) => {



    return (
        <AntCheckbox defaultChecked={title === 'Active check box' ? true : false} className={className}>
            {title}
        </AntCheckbox>
    );
};