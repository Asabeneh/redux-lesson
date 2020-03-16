export default function reducer(state = 0, action) {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1

    case 'MINUS_ONE':
      return state - 1

    // case 'CHANGE_NAME':
    //   return { ...state, name: 'David' }

    default:
      return state
  }
}
