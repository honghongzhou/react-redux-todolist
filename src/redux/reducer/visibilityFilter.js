import {SET_FILTER} from '../actionType'
import {VISIBILITY_FILTERS} from '../../consts'
const initialState = VISIBILITY_FILTERS.ALL
const visibilityFilter = (state=initialState, action) => {
    switch(action.type) {
        case SET_FILTER: {
            return action.payload.filter
        }
        default:
            return state
    }
}

export default visibilityFilter