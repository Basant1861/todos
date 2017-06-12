import {combineReducers} from 'redux'
import todos from './todos'
import visible from './visible'

const allReducers= combineReducers({
  todos:todos,
  visible:visible
})

export default allReducers
