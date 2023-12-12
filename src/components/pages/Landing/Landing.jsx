import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, toast as toastToastify } from 'react-toastify';
import toastHot from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
// import { BarChartLineFill, Alarm } from 'react-bootstrap-icons'
import { debounce, isEmpty, isNull, isUndefined } from 'lodash';
import CryptoJS from 'crypto-js';
import { bindActionCreators, compose } from '@reduxjs/toolkit';
import { Helmet } from 'react-helmet';
import { FaPlane, FaAngleRight } from 'react-icons/fa'; // https://react-icons.github.io/react-icons
import { IoMdCheckmark } from 'react-icons/io';
import { useRendersCount } from 'react-use';
import { nanoid } from 'nanoid';
import Avatar from 'react-avatar';
import styles from './landing.module.scss';
import { useCustomDispatchAction } from '../../../customHooks';
import { DataModelNavigationBar } from '../../organisms/NavigationBar/DataModelNavigationBar';
import { apiEndPoints, apiManager } from '../../../apiServices';

import { AddLoaderHOC } from '../../../hoc';
import * as actions from '../../../redux/actions';
import { Constants, EnumProps, Images, LocalStorageManager, Utils } from '../../../utils';
import { NavigationBar } from '../../organisms';
import { PG, ImgG, ButtonG } from '../../atoms';
import { ButtonIcon, ImgGPGButtonIcon, ImgGPGOutline } from '../../molecules';
import landingData1 from '../../../utils/data-json/landingData1.json';

const Landing = (props) => {
  const { setIsLoadingState } = props;
  const location = useLocation();

  const { action_store_reset, action_navigation_bar_data } = useCustomDispatchAction();

  useEffect(() => {
    action_navigation_bar_data(
      new DataModelNavigationBar({
        currentPageName: Utils.getComponentNameInLowerCase_useLocation(location),
        title: 'Dashboard',
      }),
    );

    setIsLoadingState(true);

    setIsLoadingState(false);
    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <title>Afforai - Research anything with an AI assistant</title>
        <meta name="description" content="Afforai - Research anything with an AI assistant" />
      </Helmet>

      <div className="utils-container">
        <div className="py-4 container-fluid" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', padding: '0px 60px' }}>
          <div className="d-flex flex-column" style={{ gap: '100px', position: 'relative', overflow: 'hidden' }}>
            <div className="d-flex flex-column align-items-center" style={{ gap: '40px', lineHeight: '100%', zIndex: 2 }}>
              <ImgGPGButtonIcon srcImgG={Images.appsumo} childrenPG="Now on AppSumo" pTypePG={EnumProps.ENUM_PG_P_TYPE.X_SMALL} childrenButtonIcon="Get Lifetime Deal" iconButtonIcon={FaAngleRight} />

              <PG className="text-center" style={{ maxWidth: '660px' }} pType={EnumProps.ENUM_PG_P_TYPE.X_LARGE}>
                Your second brain for maximizing productivity
              </PG>

              <PG className="text-center" colorName="gray" style={{ maxWidth: '670px' }}>
                Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
              </PG>

              <div className="d-flex w-100 flex-wrap justify-content-center" style={{ gap: '16px' }}>
                {!isNull(landingData1) && !isUndefined(landingData1) && !isEmpty(landingData1) ? (
                  landingData1.map((value, index, array) => {
                    return <ImgGPGOutline key={nanoid()} icon={IoMdCheckmark} childrenPG={value} stylePG={{ lineHeight: '0px' }} pTypePG={EnumProps.ENUM_PG_P_TYPE.MEDIUM} colorNamePG="gray" />;
                  })
                ) : (
                  <div className="my-3">
                    <strong>{landingData1.length === 0 ? Constants.NO_DATA_TO_DISPLAY : ''}</strong>
                  </div>
                )}
              </div>

              <div className="" style={{ display: 'flex', flexShrink: 1, alignContent: 'center', flexDirection: 'row', gap: '23px' }}>
                <ButtonG className={`${styles.btn_violet_fill}`}>Try for free</ButtonG>
                <ButtonG className="" style={{}} colorName="gray">
                  View pricing
                </ButtonG>
              </div>

              <div style={{ zIndex: 2, margin: '0px 72px' }}>
                <ImgG src={Images.laptop_landing_1} className="img-fluid" width="100%" alt="Laptop Landing 1" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ color: 'rgb(82, 82, 82)', fontSize: '16px' }}>
          Loved by <span style={{ color: 'rgb(128, 54, 255)' }}>20,000+</span> users around the world
        </div>

        <div className="container-fluid" style={{ maxWidth: '1600px', margin: '128px auto 160px' }}>
          <div className="row">
            <div className="px-0 pe-md-5 d-flex flex-column justify-content-center col-md-5 offset-md-1">
              <div className="px-3 pe-md-5 container">
                <PG className="mb-3" style={{ color: 'rgb(34, 34, 34)', fontWeight: 600, fontSize: '36px', lineHeight: '130%' }}>
                  Say goodbye to long, tiresome documents
                </PG>
                <PG className="mb-4 me-3 me-md-5" style={{ color: 'rgb(82, 82, 82)', fontWeight: 400, fontSize: '16px', lineHeight: '130%' }}>
                  Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
                </PG>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center" style={{ color: 'rgb(3, 204, 59)', fontWeight: 500 }}>
                    <ImgG src={Images.check_circle} className="me-3" alt="checkmark" height="24" />
                    <span style={{ fontSize: '16px' }}>A whip-smart research assistant</span>
                  </div>
                  <div className="d-flex align-items-center" style={{ color: 'rgb(3, 204, 59)', fontWeight: 500 }}>
                    <ImgG src={Images.check_circle} className="me-3" alt="checkmark" height="24" />
                    <span style={{ fontSize: '16px' }}>We speak every language</span>
                  </div>
                  <div className="d-flex align-items-center" style={{ color: 'rgb(3, 204, 59)', fontWeight: 500 }}>
                    <ImgG src={Images.check_circle} className="me-3" alt="checkmark" height="24" />
                    <span style={{ fontSize: '16px' }}>Reliable data citation for answers</span>
                  </div>
                  <div className="d-flex align-items-center" style={{ color: 'rgb(3, 204, 59)', fontWeight: 500 }}>
                    <ImgG src={Images.check_circle} className="me-3" alt="checkmark" height="24" />
                    <span style={{ fontSize: '16px' }}>Fort-Knox level data security</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 mt-md-0 col-md-5">
              <ImgG src={Images.laptop_landing_4} className="img-fluid" alt="Afforai masters the documents you upload" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ maxWidth: '1600px', margin: '160px auto' }}>
          <div className="row" style={{ marginBottom: '80px' }}>
            <div className="d-flex flex-column justify-content-center col">
              <div className="d-flex flex-column align-items-center container" style={{ gap: '24px' }}>
                <div>
                  <PG className="d-inline-flex justify-content-center align-items-center" style={{ padding: '6px 16px', borderRadius: '8px', background: 'rgb(250, 250, 250)', border: '2px solid rgb(128, 54, 255)', color: 'rgb(128, 54, 255)', fontSize: '13px' }}>
                    10x your productivity
                  </PG>
                </div>
                <PG className="text-center" style={{ maxWidth: '556px', color: 'rgb(34, 34, 34)', fontWeight: 600, fontSize: '34px', lineHeight: '130%' }}>
                  Save yourself from stress & streamline your workflow
                </PG>
                <PG className="text-center" style={{ maxWidth: '556px', color: 'rgb(82, 82, 82)', fontWeight: 400, fontSize: '15px', lineHeight: '130%' }}>
                  The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
                </PG>
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ margin: '0px auto', width: '75%', maxWidth: '1440px' }}>
              <ImgG src={Images.laptop_landing_5} className="img-fluid" width="100%" alt="Afforai laptop" />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ maxWidth: '1600px', margin: '160px auto' }}>
          <div className="row" style={{ marginBottom: '64px' }}>
            <div className="d-flex flex-column justify-content-center col">
              <div className="d-flex flex-column align-items-center container" style={{ gap: '24px' }}>
                <PG className="d-inline-flex justify-content-center align-items-center" style={{ padding: '6px 16px', borderRadius: '8px', background: 'rgb(250, 250, 250)', border: '2px solid rgb(128, 54, 255)', color: 'rgb(128, 54, 255)', fontSize: '13px' }}>
                  Why choose us?
                </PG>
                <PG className="text-center" style={{ color: 'rgb(34, 34, 34)', fontWeight: 600, fontSize: '36px', lineHeight: '100%' }}>
                  Built for the user
                </PG>
                <PG className="text-center" style={{ maxWidth: '417px', color: 'rgb(82, 82, 82)', fontWeight: 400, fontSize: '16px', lineHeight: '100%' }}>
                  Afforai is where exceptional customer focus meets exceptional technology.
                </PG>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: '0.5rem' }}>
            <div className="d-flex col-md-4 offset-md-1" style={{ paddingRight: '0.5rem', width: '35%' }}>
              <div className="d-flex flex-column rounded-4" style={{ border: '1px solid rgb(230, 230, 230)', overflow: 'hidden' }}>
                <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                  <ImgG src={Images.laptop_landing_6} className="img-fluid" alt="Afforai supports multiple languages" style={{ width: '100%' }} />
                </div>
                <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span style={{ fontSize: '16px', color: 'rgb(34, 34, 34)', fontWeight: 500 }}>Cross Language Querying</span>
                    <div className="d-flex align-items-center" style={{ padding: '0.25rem 0.5rem', borderRadius: '20px', background: 'rgb(239, 230, 255)', color: 'rgb(96, 4, 255)', fontSize: '9px', fontWeight: 500, height: '16px' }}>
                      <span>NEW</span>
                    </div>
                  </div>
                  <PG style={{ fontSize: '12px', color: 'rgb(82, 82, 82)' }}>Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.</PG>
                </div>
              </div>
            </div>
            <div className="d-flex col-md-6" style={{ paddingLeft: '0.5rem', width: '48.3333%' }}>
              <div className="d-flex flex-column rounded-4" style={{ border: '1px solid rgb(230, 230, 230)', overflow: 'hidden' }}>
                <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                  <ImgG src={Images.laptop_landing_7} className="img-fluid" alt="Afforai supports multiple document formats" style={{ width: '100%' }} />
                </div>
                <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
                  <PG className="d-inline-flex align-items-center gap-2">
                    <span style={{ fontSize: '16px', color: 'rgb(34, 34, 34)', fontWeight: 500 }}>Multiple file types supported</span>
                  </PG>
                  <PG style={{ fontSize: '12px', color: 'rgb(82, 82, 82)' }}>Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!</PG>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
            <div className="d-flex flex-column col-md-6 offset-md-1" style={{ paddingRight: '0.5rem', width: '48.3333%' }}>
              <div className="flex-grow-1 d-flex flex-column rounded-4" style={{ border: '1px solid rgb(230, 230, 230)', marginBottom: '1rem', overflow: 'hidden' }}>
                <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                  <ImgG src={Images.laptop_landing_8} className="img-fluid" alt="Afforai shows you how it got its answer" style={{ width: '100%' }} />
                </div>
                <div className="d-flex flex-column px-3 pt-2 pb-4">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span style={{ fontSize: '16px', color: 'rgb(34, 34, 34)', fontWeight: 500 }}>Valuable Data Citation</span>
                    <div className="d-flex align-items-center" style={{ padding: '0.25rem 0.5rem', borderRadius: '20px', background: 'rgb(239, 230, 255)', color: 'rgb(96, 4, 255)', fontSize: '9px', fontWeight: 500, height: '16px' }}>
                      <span>NEW</span>
                    </div>
                  </div>
                  <PG style={{ fontSize: '12px', color: 'rgb(82, 82, 82)' }}>Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never lose your time validating information again.</PG>
                </div>
              </div>
              <div className="flex-grow-1 d-flex flex-column rounded-4" style={{ border: '1px solid rgb(230, 230, 230)', overflow: 'hidden' }}>
                <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                  <ImgG src={Images.laptop_landing_10} className="img-fluid" alt="Built-in Document Viewer" style={{ width: '100%' }} />
                </div>
                <div className="d-flex flex-column px-3 pt-2 pb-4">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span style={{ fontSize: '16px', color: 'rgb(34, 34, 34)', fontWeight: 500 }}>Built-in Document Viewer</span>
                  </div>
                  <PG style={{ fontSize: '12px', color: 'rgb(82, 82, 82)' }}>Never switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file and refer to it for data citations.</PG>
                </div>
              </div>
            </div>
            <div className="d-flex col-md-4" style={{ paddingLeft: '0.5rem', width: '35%' }}>
              <div className="d-flex flex-column justify-content-between rounded-4 h-100" style={{ border: '1px solid rgb(230, 230, 230)', overflow: 'hidden' }}>
                <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                  <ImgG src={Images.laptop_landing_9} className="img-fluid" alt="Afforai is secured with the power of the cloud" style={{ width: '100%' }} />
                </div>
                <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span style={{ fontSize: '16px', color: 'rgb(34, 34, 34)', fontWeight: 500 }}>Unbreakable Security</span>
                  </div>
                  <PG style={{ fontSize: '12px', color: 'rgb(82, 82, 82)' }}>
                    Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us.{' '}
                    <a href="/security" target="_blank" rel="noopener noreferrer">
                      Learn more
                    </a>
                    .
                  </PG>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ maxWidth: '1600px', margin: '160px auto' }}>
          <div className="row">
            <div className="px-0 pe-md-5 d-flex flex-column justify-content-center col-md-5 offset-md-1">
              <div className="d-flex flex-column px-3 pe-md-5 container" style={{ gap: '24px' }}>
                <div>
                  <PG className="d-inline-flex justify-content-center align-items-center" style={{ padding: '6px 16px', borderRadius: '8px', background: 'rgb(250, 250, 250)', border: '2px solid rgb(128, 54, 255)', color: 'rgb(128, 54, 255)', fontSize: '13px' }}>
                    Most versatile
                  </PG>
                </div>
                <PG className="pe-md-5" style={{ color: 'rgb(34, 34, 34)', fontWeight: 600, fontSize: '36px', lineHeight: '130%' }}>
                  Create multiple chatbots for different purposes
                </PG>
                <PG className="pe-md-3" style={{ color: 'rgb(82, 82, 82)', fontWeight: 400, fontSize: '16px', lineHeight: '130%' }}>
                  Legal documents? Summarizing a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
                </PG>
                <div className="d-flex flex-shrink-1 align-content-center flex-row gap-4">
                  <ButtonG className={`${styles.btn_violet_fill}`}>Get started</ButtonG>
                  <ButtonG className="" style={{ border: '1px solid #e6e6e6' }} colorName="gray">
                    View pricing
                  </ButtonG>
                </div>
              </div>
            </div>
            <div className="mt-5 mt-md-0 col-md-5">
              <ImgG src={Images.laptop_landing_11} className="img-fluid" alt="Afforai masters the documents you upload" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EnhancedLanding = compose(AddLoaderHOC(''))(Landing);

export default EnhancedLanding;
