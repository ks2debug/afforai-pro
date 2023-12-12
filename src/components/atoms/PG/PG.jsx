import React from 'react';
import PropTypes from 'prop-types';
import { EnumProps } from '../../../utils';

const PG = (props) => {
  const { className, style, pType, colorName } = props;

  return (
    <p
      {...props}
      className={`p ${colorName === 'gray' ? 'p_gray' : colorName === 'green' ? 'p_green' : ''}  ${className}`}
      style={{
        ...(pType === EnumProps.ENUM_PG_P_TYPE.XX_SMALL
          ? { fontSize: '12px', fontWeight: '600', lineHeight: '' }
          : pType === EnumProps.ENUM_PG_P_TYPE.X_SMALL
          ? { fontSize: '13px', fontWeight: '600', lineHeight: '' }
          : pType === EnumProps.ENUM_PG_P_TYPE.SMALL
          ? { fontSize: '14px', fontWeight: '600', lineHeight: '' }
          : pType === EnumProps.ENUM_PG_P_TYPE.MEDIUM
          ? { fontSize: '15px', fontWeight: '400', lineHeight: '150%' }
          : pType === EnumProps.ENUM_PG_P_TYPE.LARGE
          ? { fontSize: '36px', fontWeight: '600', lineHeight: '130%' }
          : pType === EnumProps.ENUM_PG_P_TYPE.X_LARGE
          ? { fontSize: '47px', fontWeight: '600', lineHeight: '130%' }
          : {}),
        ...style,
      }}
    />
  );
};

PG.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  pType: PropTypes.oneOf(Object.values(EnumProps.ENUM_PG_P_TYPE)),
  colorName: PropTypes.oneOf(['gray', 'green']),
};

PG.defaultProps = {
  className: '',
  style: {},
  pType: EnumProps.ENUM_PG_P_TYPE.MEDIUM,
  colorName: '',
};

export default PG;
