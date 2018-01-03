import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_BOARD_ITEMS = 'GET_BOARD';


/**
 * ACTION CREATORS
 */

const getBoardsItem = boards => ({ type: GET_BOARD_ITEMS, boards });

/**
 * THUNK CREATORS
 */
export const SingleBoardThunk = id =>
  dispatch =>
    axios.get(`/api/board/pin/${id}`)
      .then(res =>
        dispatch(getBoardsItem(res.data)))
      .catch(err => console.log(err));

export default function (state = {}, action) {
  switch (action.type) {
    case GET_BOARD_ITEMS:
      return action.boards;
    default:
      return state;
  }
}
