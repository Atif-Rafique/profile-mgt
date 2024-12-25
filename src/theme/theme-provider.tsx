import React from "react";

import { ConfigProvider } from "antd";

import { APP_THEME_CONFIG } from "./theme";


export const AntThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <ConfigProvider theme={APP_THEME_CONFIG}>{children}</ConfigProvider>;
};

