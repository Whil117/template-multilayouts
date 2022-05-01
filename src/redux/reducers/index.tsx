const TypesReducers = {
  HIDRATATION: (state: any, payload: any) => ({
    ...payload,
  }),
}

type Action = {
  type: keyof typeof TypesReducers
  payload: any
}

const reducer = (state = {}, action: Action) => {
  const { type, payload } = action
  const handler = TypesReducers[type]
  const newState = handler ? handler(state as any, payload) : state
  return newState
}
export default reducer
