import { ADD_TODO, TOGGLE_TODO} from "../actionType";
const initialState = {
    allIds: [],
    byIds: []
}
export default function (state=initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const {id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        compolete: false
                    }
                }
            }
        }
        case TOGGLE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        compoleted: !state.byIds[id].compoleted
                    }
                }
            }
        }
        default:
        return state;
    }
    
}