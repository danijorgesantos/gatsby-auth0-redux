import {
  GET_QRCODE_RETURN,
  GET_QRCODE_COLLECT
} from '../actions/types';

const initialState = {
  numberQrCodeCollect: '0',
  numberQrCodeReturn: '0',
  loadedCollect: false,
  loadedReturn: false,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QRCODE_RETURN:
      console.log('payload GET_QRCODE_RETURN reducer', payload)
      return {
        ...state,
        numberQrCodeReturn: payload,
        loading: false
      };
    case GET_QRCODE_COLLECT:
      console.log('payload GET_QRCODE_COLLECT reducer', payload)
      return {
        ...state,
        numberQrCodeCollect: payload,
        loadedCollect: true
      };
    default:
      return state;
  }
}
