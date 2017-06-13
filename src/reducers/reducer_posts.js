/**
 * Created by Bien on 2017-06-12.
 */
import _ from 'lodash';
import { FETCH_POSTS } from '../actions';


export default function(state = {}, action) {
        switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}