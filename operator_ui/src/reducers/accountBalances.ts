import { Reducer } from 'redux'
import { Actions } from './actions'

export interface State {}

const INITIAL_STATE: State = {}

const reducer: Reducer<State, Actions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPSERT_ACCOUNT_BALANCE':
      return { ...state, ...action.data.accountBalances }
    default:
      return state
  }
}

export default reducer
