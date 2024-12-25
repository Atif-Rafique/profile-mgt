import { Select as AntSelect } from 'antd'


export const Select = ({ data, value, placeholder = 'Select option', onchange,
    placement = 'bottomLeft', classes, defaultValue, rootClassName, bordered }: any) => {





    return (
        <AntSelect
            allowClear
            value={value}
            options={data}
            onChange={onchange}
            placement={placement}
            variant={bordered === 'outlined' ? 'outlined' : bordered === 'borderless' ? 'borderless' : 'filled'}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={`${classes} ${bordered === 'borderless' ? 'h-auto' : 'h-[36px]'} w-full`}
            rootClassName={`${rootClassName}`}
            style={{
                borderColor: 'var(--border-gray)',
            }}
        />
    )
}
