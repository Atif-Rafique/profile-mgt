import React from 'react';


import { Form, Input as AntInput } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";


import { FormInputRules } from '@/utils';


const { TextArea } = AntInput;




export const Input = ({ ...args }) => {

    // value
    const { label, name, size, type, defaultValue, onChange, disabled, placeholder, styles, optional = false, rules, customClasses, hasWhiteBg, value, form, max } = args;


    const formControl = rules ? { name, rules } : FormInputRules(name, optional, form);



    return (
        <React.Fragment>
            <label className="font-semibold font-outfit">{label}</label>
            <Form.Item
                {...formControl}
                style={{ marginTop: '0.3rem', marginBottom: 0 }}
                className={`${customClasses} mb-0`}
                validateDebounce={1000}
            >
                {type === "password" ? (
                    <AntInput.Password
                        size={size}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={`font-medium primary-box-shadow ${hasWhiteBg && 'bg-[var(--white-color)]'}`}
                        autoComplete='current-password'
                        style={{ height: "36px", margin: 0 }}
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                ) : (type !== "password" && type !== 'textarea') ? (
                    <AntInput
                        size={size}
                        type={type}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={onChange}
                        maxLength={max}
                        autoComplete='label'
                        className={`font-medium primary-box-shadow ${hasWhiteBg && 'bg-[var(--white-color)]'}`}
                        placeholder={placeholder}
                        disabled={disabled}
                        style={{ height: "36px", margin: 0, ...styles }}
                    />
                ) : (
                    <TextArea
                        showCount
                        maxLength={45}
                        onChange={onChange}
                        placeholder={placeholder}
                        autoSize={{ minRows: 2, maxRows: 4 }}
                        className={`font-medium primary-box-shadow ${hasWhiteBg && 'bg-[var(--white-color)]'}`}
                        style={{ padding: "0.4rem 0" }}
                    />
                )}

            </Form.Item>
        </React.Fragment>
    )
}


export const WithoutFormInput = ({ ...args }) => {


    const { size, label, type, value, onChange, hasWhiteBg, placeholder, disabled, styles, colorPrimary } = args;


    return (

        <div>

            <label className="font-semibold capitalize">{label}</label>

            <AntInput
                size={size}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete='label'
                className={`text-xs font-medium primary-box-shadow mt-[0.3rem] ${hasWhiteBg && 'bg-[var(--white-color)]'}`}
                placeholder={placeholder}
                disabled={disabled}
                style={{
                    height: "36px", margin: 0,
                    color: colorPrimary ? 'var(--text-black)' : '',
                    ...styles
                }}
            />

        </div>
    )
}