import React from 'react';
import { LocalStorageManager } from '../utils';

class HardcodedData {
  static app = () => {
    LocalStorageManager.setEncryptedItem(LocalStorageManager.ENUM_LS_KEYS.ACCESS_TOKEN, 'Hardcoded access token');
  };
}

export default HardcodedData;
