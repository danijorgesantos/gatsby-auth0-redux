// import api from '../utils/api';
import axios from 'axios';
import {
  GET_QRCODE_RETURN,
  GET_QRCODE_COLLECT
} from './types';

// Get Qr Code number -->  collect 
export const getQrCodeCollect = () => async dispatch => {
  try {
    console.log('just beofre the dispacth -->  collect')
    const res = await axios.get('https://recollect0.herokuapp.com/ccode');
    dispatch({
      type: GET_QRCODE_COLLECT,
      payload: res.data
    });
  } catch (err) {
      console.log(err)
  }
};


// Get Qr Code return number --> return
export const getQrCodeReturn = () => async dispatch => {
  try {
    console.log('just beofre the dispacth --> return')
    const res = await axios.get('https://recollect0.herokuapp.com/rcode');
    dispatch({
      type: GET_QRCODE_RETURN,
      payload: res.data
    });
  } catch (err) {
      console.log(err)
  }
};


