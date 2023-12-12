import axios from 'axios';
// import qs from 'qs';
import { isEmpty, isNull, isUndefined } from 'lodash';
import { useNavigate, Navigate } from 'react-router-dom';
import { apiEndPoints, apiManager } from './index';
import { Constants, LocalStorageManager, Utils } from '../utils';

const axiosCreate = axios.create();

axiosCreate.interceptors.request.use(
  (config) => {
    // console.log("🚀 ~ file: axiosManager.js:21 ~ config:", config)

    config.headers['content-type'] = config.isFormData ? 'multipart/form-data' : 'application/json';
    if (config.isSendAuthorization) {
      // config.headers['Authorization'] = 'Bearer ' + LocalStorageManager.get_access_token();
      config.headers.Authorization = `Bearer ${LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.ACCESS_TOKEN)}`;
    }
    config.headers.Accept = 'application/json';
    // console.log("🚀 ~ file: axiosManager.js:27 ~ config:", config)

    return config;
  },
  (error) => {
    // console.log("🚀 ~ file: axiosManager.js:28 ~ error:", error)
    return Promise.reject(error);
    // return error; // Avoid use = will not send data to the next event
  },
);

axiosCreate.interceptors.response.use(
  (response) => {
    // console.log('🚀 ~ file: axiosCreate.js:42 ~ response:', response);
    return response;
  },
  async (error) => {
    // console.log("🚀 ~ file: axiosManager.js:39 ~ error:", error)

    const { response: { status, data } = {}, config: originalConfig } = error || {};
    // console.log("🚀 ~ file: axiosManager.js:47 ~ originalConfig:", originalConfig)
    // console.log("🚀 ~ file: axiosManager.js:47 ~ originalConfig.url:", originalConfig.url)
    // console.log("🚀 ~ file: axiosManager.js:47 ~ status:", status)

    if (status === 401 && originalConfig.url !== apiEndPoints.AuthRefreshToken()) {
      // const refreshToken = LocalStorageManager.get_refresh_token()
      const refreshToken = LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.REFRESH_TOKEN);
      if (refreshToken) {
        // console.log("🚀 ~ file: axiosManager.js:53 ~ refreshToken:", refreshToken)

        try {
          const {
            status,
            data: dataResponse,
            config,
          } = await apiManager.api_auth_refresh_token({
            // eslint-disable-next-line object-shorthand
            bodyData: { refreshToken: refreshToken },
          });
          // console.log("🚀 ~ file: axiosManager.js:61 ~ dataResponse:", dataResponse)

          // LocalStorageManager.set_access_token(dataResponse.access_token)
          LocalStorageManager.setEncryptedItem(LocalStorageManager.ENUM_LS_KEYS.ACCESS_TOKEN, dataResponse.access_token);
          // LocalStorageManager.set_refresh_token(dataResponse.refresh_token)
          LocalStorageManager.setEncryptedItem(LocalStorageManager.ENUM_LS_KEYS.REFRESH_TOKEN, dataResponse.refresh_token);

          if (dataResponse.access_token) {
            // originalConfig.headers['Authorization'] = 'Bearer ' + dataResponse.access_token;
            return axiosCreate(originalConfig);
          }
          return Promise.reject(error);
        } catch (error) {
          // console.log("🚀 ~ file: axiosManager.js:65 ~ error:", error)
          return Promise.reject(error);
        } finally {
        }
      } else {
        return Promise.reject(error);
      }
    } else if (originalConfig.url === apiEndPoints.AuthRefreshToken()) {
      // action_store_reset(); // handeled in - Login.jsx - useEffect
      Utils.logoutReset();
      Utils.reloadPage();
      return Promise.reject(error);
    }

    return Promise.reject(error);
    // return error; // Avoid use = will not send data to the next event
  },
);

const axiosManager = async ({
  baseURL,
  url,
  method = Constants.ENUM_METHODS.GET,
  isFormData = false,
  isSendAuthorization = false,
  headers = {},
  isParamsSerialize = false,
  params = {},
  bodyData = {},
  queryString = {}, // queryString is for Older browsers
  timeout = 3000,
  timeoutErrorMessage = 'The request took too long to complete. Please try again later.',
  responseType,
}) => {
  // console.log("🚀 ~ file: axiosManager.js:103 ~ axiosManager:")

  try {
    const response = await axiosCreate({
      baseURL,
      url,
      method,
      isFormData,
      isSendAuthorization,
      headers,
      isParamsSerialize,
      params,
      /* paramsSerializer: function (params) {
        return qs.stringify(params, {arrayFormat: 'brackets'})
      }, */
      data: bodyData, // qs.stringify(queryString) = queryString is for Older browsers
      queryString,
      timeout,
      timeoutErrorMessage,
      responseType,
      /* onUploadProgress: function ({ loaded, total, progress, bytes, estimated, rate, upload = true }) {
      }, */
      /* onDownloadProgress: function ({ loaded, total, progress, bytes, estimated, rate, download = true }) {
      } */
    });
    // console.log("🚀 ~ file: axiosManager.js:88 ~ response:", response)

    return response;
  } catch (error) {
    // console.log("🚀 ~ file: axiosManager.js:93 ~ error:", error)
    return Promise.reject(error);
    // return error; // Avoid use = will not send data to the next event
  } finally {
  }
};

export default axiosManager;
