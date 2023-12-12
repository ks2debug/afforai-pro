/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { EnumProps } from '../../../utils';

const ImgG = (props) => {
  const { className, style } = props;

  return <img {...props} className={`image  ${className}`} style={{ ...style }} />;
};

ImgG.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
};

ImgG.defaultProps = {
  className: '',
  style: {},
  alt: 'Image',
};

export default ImgG;
