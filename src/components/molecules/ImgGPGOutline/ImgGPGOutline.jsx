import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { EnumProps, Images } from '../../../utils';
import { ImgG, PG } from '../../atoms';
import styles from './imgg-pg-outline.module.scss';

const ImgGPGOutline = (props) => {
  const { className, style, classNameImgG, styleImgG, srcImgG, altImgG, icon: Icon, classNameIcon, sizeIcon, colorIcon, childrenPG, classNamePG, stylePG, pTypePG, colorNamePG } = props;

  return (
    <div className={`${styles.div_container} ${className}`} style={{ display: 'flex', alignItems: 'center', padding: '6px', borderRadius: '4px', gap: '4px', ...style }}>
      {srcImgG && <ImgG className={`${classNameImgG}`} style={{ width: '26px', height: '20px', ...styleImgG }} src={srcImgG} alt={altImgG} />}

      {Icon && <Icon className={`${styles.icon} ${classNameIcon}`} size={sizeIcon} color={colorIcon} />}

      <PG className={`my-auto ${classNamePG}`} style={{ ...stylePG }} pType={pTypePG} colorName={colorNamePG}>
        {childrenPG}
      </PG>
    </div>
  );
};

ImgGPGOutline.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  classNameImgG: PropTypes.string,
  styleImgG: PropTypes.object,
  srcImgG: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  altImgG: PropTypes.string,
  icon: PropTypes.elementType,
  classNameIcon: PropTypes.string,
  sizeIcon: PropTypes.number,
  colorIcon: PropTypes.string,
  childrenPG: PropTypes.node,
  classNamePG: PropTypes.string,
  stylePG: PropTypes.object,
  pTypePG: PropTypes.PropTypes.oneOf(Object.values(EnumProps.ENUM_PG_P_TYPE)),
  colorNamePG: PropTypes.PropTypes.oneOf(['gray', 'green']),
};

ImgGPGOutline.defaultProps = {
  className: '',
  style: {},
  classNameImgG: '',
  styleImgG: {},
  srcImgG: '',
  altImgG: '',
  icon: null,
  classNameIcon: '',
  sizeIcon: 15,
  colorIcon: '',
  childrenPG: null,
  classNamePG: '',
  stylePG: {},
  pTypePG: EnumProps.ENUM_PG_P_TYPE.MEDIUM,
  colorNamePG: '',
};

export default ImgGPGOutline;
