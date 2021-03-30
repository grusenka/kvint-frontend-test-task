import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';

require('./ant-switch-custom.less');

const SwitchComponent: React.FC<Props> = props => {
  const {
    className,
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    loading,
    onChange,
    onClick,
  } = props;

  return (
    <Switch
      className={className}
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      loading={loading}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

SwitchComponent.defaultProps = {
  className: '',
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  disabled: false,
  loading: false,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

SwitchComponent.propTypes = {
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default SwitchComponent;
