import axios from 'axios';

const initialState = {
  user: {}
}

const GET_USER = 'GET_USER';

export default function User(state = initialState, action){
  switch(action.type) {
    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {
        user: action.payload.data[0]
      })
    default:
      return state
  }
}
export function getUser(){
  return {
    type: GET_USER,
    payload: axios.get('/api/users/getuser')
  }
}
