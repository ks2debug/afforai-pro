import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { FaAngleRight } from 'react-icons/fa'; // https://react-icons.github.io/react-icons
import { EnumProps, Images } from '../../../utils';
import { ImgG, PG } from '../../atoms';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import styles from './imgg-pg-button-icon.module.scss';

const ImgGPGButtonIcon = (props) => {
  const {
    className,
    style,
    classNameImgG,
    styleImgG,
    srcImgG,
    altImgG,
    childrenPG,
    classNamePG,
    stylePG,
    pTypePG,
    colorNamePG,
    childrenButtonIcon,
    classNameButtonIcon,
    styleButtonIcon,
    typeButtonIcon,
    onClickButtonIcon,
    classNamePGButtonIcon,
    stylePGButtonIcon,
    pTypePGButtonIcon,
    colorNamePGButtonIcon,
    avatarButtonIcon,
    nameAvatarButtonIcon,
    maxInitialsAvatarButtonIcon,
    sizeAvatarButtonIcon,
    colorAvatarButtonIcon,
    textSizeRatioAvatarButtonIcon,
    roundAvatarButtonIcon,
    iconButtonIcon: IconButtonIcon,
    classNameIconButtonIcon,
    sizeIconButtonIcon,
  } = props;

  return (
    <div className={`${styles.div_container}  ${className}`} style={{ display: 'flex', alignItems: 'center', padding: '6px', borderRadius: '12px', gap: '6px', background: 'linear-gradient(45deg, #ff9501 50%, #ffb901 80%)', ...style }}>
      {srcImgG && <ImgG className={`${classNameImgG}`} style={{ width: '26px', height: '20px', ...styleImgG }} src={srcImgG} alt={altImgG} />}

      <PG className={`${classNamePG}`} style={{ marginTop: 'auto', marginBottom: 'auto', ...stylePG }} pType={pTypePG} colorName={colorNamePG}>
        {childrenPG}
      </PG>
      <ButtonIcon
        classNam={`${classNameButtonIcon}`}
        style={{ background: 'linear-gradient(#ffffff00 0%, #ffffff80 50.04%, #ffffff80 50.85%)', ...styleButtonIcon }}
        type={typeButtonIcon}
        onClick={onClickButtonIcon}
        classNamePG={classNamePGButtonIcon}
        stylePG={stylePGButtonIcon}
        pTypePG={pTypePGButtonIcon}
        colorNamePG={colorNamePGButtonIcon}
        avatar={avatarButtonIcon}
        nameAvatar={nameAvatarButtonIcon}
        maxInitialsAvatar={maxInitialsAvatarButtonIcon}
        sizeAvatar={sizeAvatarButtonIcon}
        colorAvatar={colorAvatarButtonIcon}
        textSizeRatioAvatar={textSizeRatioAvatarButtonIcon}
        roundAvatar={roundAvatarButtonIcon}
        icon={IconButtonIcon}
        classNameIcon={classNameIconButtonIcon}
        sizeIcon={sizeIconButtonIcon}
      >
        {childrenButtonIcon}
      </ButtonIcon>
    </div>
  );
};

ImgGPGButtonIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  classNameImgG: PropTypes.string,
  styleImgG: PropTypes.object,
  srcImgG: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  altImgG: PropTypes.string,
  childrenPG: PropTypes.node,
  classNamePG: PropTypes.string,
  stylePG: PropTypes.object,
  pTypePG: PropTypes.PropTypes.oneOf(Object.values(EnumProps.ENUM_PG_P_TYPE)),
  colorNamePG: PropTypes.PropTypes.oneOf(['gray', 'green']),
  childrenButtonIcon: PropTypes.node,
  classNameButtonIcon: PropTypes.string,
  styleButtonIcon: PropTypes.object,
  typeButtonIcon: PropTypes.string,
  onClickButtonIcon: PropTypes.func,
  classNamePGButtonIcon: PropTypes.string,
  stylePGButtonIcon: PropTypes.object,
  pTypePGButtonIcon: PropTypes.oneOf(Object.values(EnumProps.ENUM_PG_P_TYPE)),
  colorNamePGButtonIcon: PropTypes.oneOf(['gray', 'green']),
  avatarButtonIcon: PropTypes.bool,
  nameAvatarButtonIcon: PropTypes.string,
  maxInitialsAvatarButtonIcon: PropTypes.number,
  sizeAvatarButtonIcon: PropTypes.number,
  colorAvatarButtonIcon: PropTypes.string,
  textSizeRatioAvatarButtonIcon: PropTypes.number,
  roundAvatarButtonIcon: PropTypes.bool,
  iconButtonIcon: PropTypes.elementType,
  classNameIconButtonIcon: PropTypes.string,
  sizeIconButtonIcon: PropTypes.number,
};

ImgGPGButtonIcon.defaultProps = {
  className: '',
  style: {},
  classNameImgG: '',
  styleImgG: {},
  srcImgG: '',
  altImgG: '',
  childrenPG: null,
  classNamePG: '',
  stylePG: {},
  pTypePG: EnumProps.ENUM_PG_P_TYPE.MEDIUM,
  colorNamePG: '',
  childrenButtonIcon: null,
  classNameButtonIcon: '',
  styleButtonIcon: {},
  typeButtonIcon: '',
  onClickButtonIcon: () => {},
  classNamePGButtonIcon: '',
  stylePGButtonIcon: {},
  pTypePGButtonIcon: EnumProps.ENUM_PG_P_TYPE.X_SMALL,
  colorNamePGButtonIcon: '',
  avatarButtonIcon: false,
  nameAvatarButtonIcon: '',
  maxInitialsAvatarButtonIcon: 1,
  sizeAvatarButtonIcon: 23,
  colorAvatarButtonIcon: '',
  textSizeRatioAvatarButtonIcon: 1.4,
  roundAvatarButtonIcon: false,
  iconButtonIcon: null,
  classNameIconButtonIcon: '',
  sizeIconButtonIcon: 10,
};

export default ImgGPGButtonIcon;
