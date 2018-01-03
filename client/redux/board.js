import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_BOARDS = 'GET_BOARDS';


/**
 * ACTION CREATORS
 */

const getBoards = boards => ({ type: GET_BOARDS, boards });

/**
 * THUNK CREATORS
 */
export const BoardThunk = id =>
  dispatch =>
    axios.get(`/api/board/${id}`)
      .then(res =>
        dispatch(getBoards(res.data)))
      .catch(err => console.log(err));

export default function (state = [], action) {
  switch (action.type) {
    case GET_BOARDS:
      return action.boards;
    default:
      return state;
  }
}
