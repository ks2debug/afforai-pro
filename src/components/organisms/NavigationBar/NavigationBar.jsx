// first component
import React, { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import classNames from 'classnames';
import { bindActionCreators } from '@reduxjs/toolkit';
import styles from './navigation-bar.module.scss';
import { useCustomDispatchAction } from '../../../customHooks';
import * as actions from '../../../redux/actions';
import { Constants, Images, LocalStorageManager, Utils } from '../../../utils';
import { PG, ImgG, ButtonG } from '../../atoms';

const NavigationBar = (props) => {
  const location = useLocation();

  useEffect(() => {
    return () => {};
  }, []);

  if (location.pathname === Constants.ENUM_PATH.LANDING) {
    return (
      <div>
        <nav className="py-0 py-md-4 px-md-5 flex-column navbar navbar-expand-md navbar-light fixed-top">
          <div className="container-fluid" style={{ maxWidth: '1264px', padding: '8px 24px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(209, 213, 219)', borderRadius: '16px', backdropFilter: 'blur(16px)', background: 'rgba(250, 250, 250, 0.5)' }}>
            <div className="d-flex align-items-center justify-content-between">
              <a href="/" className="d-flex flex-shrink-1 justify-content-start align-items-center me-0 py-0 navbar-brand" style={{ height: 'fit-content', gap: '8px', flex: '1 1 0%' }}>
                <img src={Images.logo} alt="Afforai Logo" height="24px" width="24px" style={{ verticalAlign: 'middle' }} />

                <div style={{ color: 'rgb(17, 17, 17)', fontStyle: 'normal', fontWeight: 500, fontSize: '18px', textAlign: 'center', height: '24px' }}>Afforai</div>
              </a>
              {/* Rest of your navigation elements */}
            </div>

            <div className="d-sm-none d-md-flex justify-content-center collapse navbar-collapse" id="navbarSupportedContent">
              <a href="https://afforai.getrewardful.com/signup" target="_blank" rel="noopener noreferrer" className="mx-2 nav-link">
                <span style={{ color: 'rgb(17, 17, 17)', fontStyle: 'normal', fontWeight: 500, fontSize: '14px' }}>Affiliate</span>
              </a>
              <a href="/pricing" className="mx-2 nav-link">
                <span style={{ color: 'rgb(17, 17, 17)', fontStyle: 'normal', fontWeight: 500, fontSize: '14px' }}>Pricing</span>
              </a>
              <a href="/#testimonial" className="mx-2 nav-link">
                <span style={{ color: 'rgb(17, 17, 17)', fontStyle: 'normal', fontWeight: 500, fontSize: '14px' }}>Testimonials</span>
              </a>
              <a href="https://help.afforai.com/" target="_blank" rel="noopener noreferrer" className="mx-2 nav-link">
                <span style={{ color: 'rgb(17, 17, 17)', fontStyle: 'normal', fontWeight: 500, fontSize: '14px' }}>Help Center</span>
              </a>
            </div>

            <div className="d-flex flex-row justify-content-end align-items-center gap-2 navbar-nav" style={{}}>
              <ButtonG className="rounded-3" style={{ border: '1px solid #e6e6e6', padding: '5px 10px' }} colorName="gray">
                Log in
              </ButtonG>
              <ButtonG className={`${styles.btn_violet_fill} rounded-3`} style={{ border: '1px solid #e6e6e6', padding: '5px 10px' }}>
                Try for free
              </ButtonG>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{ width: '20px' }} />
            </button>
          </div>
        </nav>
        <div style={{ opacity: 0, height: '106px' }} />
      </div>
    );
  }
  return null;
};

/* NavigationBar.propTypes = {
  currentPageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickNavItem: PropTypes.func,
}

NavigationBar.defaultProps = {
  currentPageName: 'Page',
  title: 'NavigationBar',
  onClickNavItem: () => { },
} */

export default NavigationBar;
