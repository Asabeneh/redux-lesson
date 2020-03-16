const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}
console.log(store)
store.dispatch(action)
console.log(store.getState())
const productReducer = (state = [], action) => {
  return state
}

const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload
  }
  return state
}

const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
})

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iphne' }],
    user: 'Asabeneh'
  },
  window.devToolsExtension && window.devToolsExtension()
)
console.log(store)
console.log(store.getState())
const updateUserAction = {
  type: 'UPDATE_USER',
  payload: {
    user: 'John'
  }
}
