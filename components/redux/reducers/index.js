const INITAL_STATE = {
  value: 0,
  uuid: {
    loading: false,
    data: {}
  }
}

const reducer = (state = INITAL_STATE, action) => {
  // console.log('reducer', action)
  if (action.type === 'increment') {
    return { value: state.value + 1 }
  }
  if (action.type === 'GET_UUID') {
    return {
      ...state,
      uuid: {
        ...state.uuid,
        loading: true,
        data: {}
      }
    }
  }
  if (action.type === 'GET_UUID_SUCCESS') {
    return {
      ...state,
      uuid: {
        ...state.uuid,
        loading: false,
        data: action.data
      }
    }
  }
  return state
}
export default reducer
