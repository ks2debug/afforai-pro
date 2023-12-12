import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { EnumProps } from '../../../utils';
import { PG } from '../../atoms';

const ButtonIcon = (props) => {
  const { children, className, style, classNamePG, stylePG, pTypePG, colorNamePG, avatar, nameAvatar, maxInitialsAvatar, sizeAvatar, colorAvatar, textSizeRatioAvatar, roundAvatar, icon: Icon, classNameIcon, sizeIcon } = props;

  return (
    <button {...props} className={`button_outline ${className}`} style={{ display: 'flex', alignItems: 'center', padding: '4px 6px', borderRadius: '6px', gap: '3px', ...style }}>
      {avatar && <Avatar {...props} name={nameAvatar} maxInitials={maxInitialsAvatar} size={sizeAvatar} color={colorAvatar} textSizeRatio={textSizeRatioAvatar} round={roundAvatar} />}

      <PG className={`${classNamePG}`} style={{ marginTop: 'auto', marginBottom: 'auto', ...stylePG }} pType={pTypePG} colorName={colorNamePG}>
        {children}
      </PG>

      {Icon && <Icon className={`${classNameIcon}`} size={sizeIcon} />}
    </button>
  );
};

ButtonIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  classNamePG: PropTypes.string,
  stylePG: PropTypes.object,
  pTypePG: PropTypes.oneOf(Object.values(EnumProps.ENUM_PG_P_TYPE)),
  colorNamePG: PropTypes.oneOf(['gray', 'green']),
  avatar: PropTypes.bool,
  nameAvatar: PropTypes.string,
  maxInitialsAvatar: PropTypes.number,
  sizeAvatar: PropTypes.number,
  colorAvatar: PropTypes.string,
  textSizeRatioAvatar: PropTypes.number,
  roundAvatar: PropTypes.bool,
  icon: PropTypes.elementType,
  classNameIcon: PropTypes.string,
  sizeIcon: PropTypes.number,
};

ButtonIcon.defaultProps = {
  className: '',
  style: {},
  type: 'button',
  onClick: () => {},
  classNamePG: '',
  stylePG: {},
  pTypePG: EnumProps.ENUM_PG_P_TYPE.X_SMALL,
  colorNamePG: '',
  avatar: false,
  nameAvatar: '',
  maxInitialsAvatar: 1,
  sizeAvatar: 23,
  colorAvatar: '',
  textSizeRatioAvatar: 1.4,
  roundAvatar: false,
  icon: null,
  classNameIcon: '',
  sizeIcon: 10,
};

export default ButtonIcon;
