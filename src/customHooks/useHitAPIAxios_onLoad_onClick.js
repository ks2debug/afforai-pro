import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Constants } from '../utils';
import { axiosManager } from '../apiServices';

const useHitAPIAxios_onLoad_onClick = (payload) => (isOnLoad) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [dataResponse, setDataResponse] = useState(null);
  const [configResponse, setConfigResponse] = useState(null);
  const [dataError, setDataError] = useState(null);
  const [configError, setConfigError] = useState(null);

  useEffect(() => {
    console.log('🚀 ~ file: useHitAPIAxios_onLoad_onClick.js:27 ~ useEffect ~ isOnLoad:', isOnLoad);
    if (isOnLoad) {
      // eslint-disable-next-line no-use-before-define
      hitAPI(payload);
    }
    return () => {};
  }, []);

  const hitAPI = async (payload) => {
    setLoading(true);
    try {
      const { status, data, config } = await axiosManager({
        ...payload,
      });

      setStatus(status);
      setDataResponse(data);
      setConfigResponse(config);
    } catch (error) {
      const { response: { status, data } = {}, config } = error || {};

      setStatus(status);
      setDataError(data);
      setConfigError(config);
    } finally {
      setLoading(false);
    }
  };

  return { loading, status, dataResponse, configResponse, dataError, configError, hitAPI };
};

export default useHitAPIAxios_onLoad_onClick;
