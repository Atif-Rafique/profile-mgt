

export const APP_THEME_CONFIG = {

    // token: {
    //     // colorPrimary: 'var(--primary-color)',
    //     // colorPrimaryBg: 'var(--primary-color)',
    //     // colorPrimaryHover: 'var(--primary-color)',
    //     // colorPrimaryHover: "var(--primary-color-dark)",
    //     // colorSuccess: "var(--primary-success-dark)",
    //     // colorDangerHover: "var(--primary-danger-dark)",
    // },


    /******** OVERWRITE ANT DESIGN COMPONENTS BUILT-IN THEME ********/
    components: {
        // Button: {
        //     // primaryColor: 'var(--white-color)',
        //     primaryShadow: 'none',
        //     fontSize: 12,
        //     // colorBgContainerDisabled: 'var(--primary-color)',
        //     // colorTextDisabled: 'var(--white-color)',
        //     // colorPrimary: 'var(--primary-color)',
        //     // colorPrimaryActive: 'var(--primary-color-dark)',
        //     // colorPrimaryHover: 'var(--primary-color-dark)',
        // },

        Typography: {
            colorText: 'var(--black-color)',
        },


        Checkbox: {
            colorPrimary: 'var(--primary-color-dark)',
            colorPrimaryHover: 'var(--primary-color-dark)',
            colorBorder: 'var(--primary-color)',
            colorWhite: 'var(--white-color)',
            borderRadiusSM: 0,
        },

        Table: {
            rowHoverBg: 'var(--primary-color-400)'
        },

        Radio: {
            fontSize: 12,
            colorPrimary: 'var(--primary-color-dark)',
            controlOutline: 'var(--primary-color-dark)',
            buttonSolidCheckedBg: 'var(--primary-color-dark)',
            buttonSolidCheckedActiveBg: 'var(--primary-color-dark)',
            buttonSolidCheckedHoverBg: 'var(--primary-color-400)',
        },

        Select: {
            fontSize: 12,
            borderRadius: 0,
            optionSelectedBg: 'var(--primary-color-400)',
            colorBorder: 'var(--border-color)',
            colorPrimary: 'var(--primary-color-400)',
            controlOutline: 'transparent',
            activeBorderColor: "var(--primary-color-dark)",
            optionActiveBg: 'var(--primary-color-400)',
            optionSelectedColor: 'var(--black-color)',
        },

        Alert: {
            borderRadiusLG: 0,
            colorErrorBorder: 'var(--primary-danger)',
            colorSuccessBorder: 'var(--primary-success)',
            colorWarningBorder: 'var(--primary-warning)'
        },


        Input: {
            fontSize: 12,
            colorPrimaryHover: 'var(--primary-dark-color)',
            colorText: 'var(--primary-text-color)',
            defaultBg: 'var(--primary-dark-color)',
            colorBgContainer: 'transparent',
            colorTextPlaceholder: 'gray',
            activeBorderColor: 'var(--primary-dark-color)',
            activeShadow: 'var(--primary-box-shadow)'
        },


        Spin: {
            colorPrimary: "var(--primary-dark-color-active)"
        },
        Slider: {
            fontSize: 12,
            trackBg: "var(--primary-color-700)",
            handleColor: "var(--primary-dark-color)",
            trackHoverBg: "var(--primary-dark-color-active)",
            handleActiveColor: "var(--primary-dark-color)",
        },
        Modal: {
            fontFamily: "var(--primary-font)",
            colorBgTextHover: "transparent",
            colorBgTextActive: "transparent",
        },
        DatePicker: {
            fontSize: 12,
            colorBgContainer: 'transparent',
            fontFamily: "var(--primary-font)",
            activeShadow: 'var(--primary-box-shadow)',
            colorPrimary: 'var(--primary-dark-color)',
            addonBg: 'var(--primary-dark-color)',
            colorIcon: 'var(--primary-dark-color)',
            colorSplit: 'var(--primary-dark-color)',
            colorIconHover: 'var(--primary-dark-color)',
            colorTextHeading: 'var(--primary-dark-color)',
            activeBorderColor: 'var(--primary-dark-color)',
            cellHoverWithRangeBg: 'var(--primary-light-color)',
            cellRangeBorderColor: 'var(--primary-light-color)',
            cellActiveWithRangeBg: 'var(--primary-light-color)',
            controlItemBgActive: 'var(--primary-light-color)',
            cellHoverBg: 'var(--primary-dark-color)',
        },



        Dropdown: {
            controlItemBgHover: 'transparent'
            // controlPaddingHorizontal:0,
            // paddingBlock:0
        }
    },
};
