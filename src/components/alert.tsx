import React from 'react';
import { Alert as AntAlert, AlertProps as AntAlertProps } from 'antd';


interface AlertProps extends AntAlertProps {
  message: string;
  onClose?: () => void;
}


export const Alert: React.FC<AlertProps> = ({
  message,
  type = 'success',
  onClose,
  style,
  ...props
}) => {
  return (
    <AntAlert
      message={message}
      type={type}
      showIcon
      closable
      onClose={onClose}
      style={{ marginBottom: 16, ...style }}
      {...props}
    />
  );
};


Alert.displayName = 'Alert';