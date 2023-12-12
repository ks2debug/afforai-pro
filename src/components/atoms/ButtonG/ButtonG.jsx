import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { EnumProps } from '../../../utils';

const ButtonG = (props) => {
  const { className, style, title_type, colorName } = props;

  return (
    <button
      {...props}
      className={`button_solid ${colorName === 'gray' ? 'btn_title_gray' : colorName === 'green' ? 'btn_title_green' : ''}  ${className}`}
      style={{
        padding: '7px 28px',
        border: '0px',
        borderRadius: '12px',

        ...(title_type === EnumProps.ENUM_BUTTONG_TITLE_TYPE.XX_SMALL
          ? { fontSize: '12px', fontWeight: '600', lineHeight: '' }
          : title_type === EnumProps.ENUM_BUTTONG_TITLE_TYPE.X_SMALL
          ? { fontSize: '13px', fontWeight: '600', lineHeight: '' }
          : title_type === EnumProps.ENUM_BUTTONG_TITLE_TYPE.SMALL
          ? { fontSize: '14px', fontWeight: '600', lineHeight: '' }
          : title_type === EnumProps.ENUM_BUTTONG_TITLE_TYPE.MEDIUM
          ? { fontSize: '15px', fontWeight: '600', lineHeight: '150%' }
          : title_type === EnumProps.ENUM_BUTTONG_TITLE_TYPE.LARGE
          ? { fontSize: '36px', fontWeight: '600', lineHeight: '130%' }
          : title_type === EnumProps.ENUM_BUTTONG_TITLE_TYPE.X_LARGE
          ? { fontSize: '47px', fontWeight: '600', lineHeight: '130%' }
          : {}),

        ...style,
      }}
    />
  );
};

ButtonG.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  title_type: PropTypes.oneOf(Object.values(EnumProps.ENUM_BUTTONG_TITLE_TYPE)),
  colorName: PropTypes.oneOf(['gray', 'green']),
};

ButtonG.defaultProps = {
  className: '',
  style: {},
  type: 'button',
  onClick: () => {},
  title_type: EnumProps.ENUM_BUTTONG_TITLE_TYPE.MEDIUM,
  colorName: '',
};

export default ButtonG;
