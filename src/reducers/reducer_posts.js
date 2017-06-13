/**
 * Created by Bien on 2017-06-12.
 */
import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';


export default function(state = {}, action) {
        switch (action.type) {
            case DELETE_POST:
                return _.omit(state, action.payload);
                return _.reject(state, post => post.id === action.payload);
            case FETCH_POST:
                // const post = action.payload.data;
                // const newState = {...state }
                // newState[post.id] = post;
                // return newState;

                return { ...state, [action.payload.data.id]: action.payload.data };
            case FETCH_POSTS:
                return _.map(action.payload.data, 'id');
            default:
                return state;
    }
}