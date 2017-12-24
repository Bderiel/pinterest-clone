import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_PINS = 'GET_PINS';
const GET_USER_PINS = 'GET_USER_PINS';
const REMOVE_PIN = 'REMOVE_PIN';
const SAVE_PIN = 'SAVE_PIN';

/**
 * INITIAL STATE
 */
// const intial = {
//   pins: [],
//   userPins: [],
// };

/**
 * ACTION CREATORS
 */
const getPins = pins => ({ type: GET_PINS, pins });
const getPinByUser = userPins => ({ type: GET_USER_PINS, userPins });

/**
 * THUNK CREATORS
 */
export const pinsThunk = () =>
  dispatch =>
    axios.get('/api/pin')
      .then(res =>
        dispatch(getPins(res.data)))
      .catch(err => console.log(err));

export const pinByUserThunk = username =>
  dispatch =>
    axios.get(`/api/pin/${username}`)
      .then(res =>
        dispatch(getPins(res.data)))
      .catch(err => console.log(err));

export default function (state = [], action) {
  switch (action.type) {
    case GET_PINS:
      return action.pins;
    case GET_USER_PINS:
      return action.userPins;
    default:
      return state;
  }
}
