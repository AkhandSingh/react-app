import instance from "../apis/CommonApi";
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await instance({ url: '/posts', baseURL: 'https://jsonplaceholder.typicode.com' });
    dispatch({type: 'FETCH_POSTS', payload: response.data })
};

// export const fetchUser = (id) => async dispatch => {
//     const response = await instance({ url: '/users/'+id, baseURL: 'https://jsonplaceholder.typicode.com' });
//     dispatch({type: 'FETCH_USER', payload: response.data })
// };

export const fetchUser = id=>dispatch=> _fetchUser(id,dispatch);

const _fetchUser = _.memoize(async function(id, dispatch) {
    const response = await instance({ url: '/users/'+id, baseURL: 'https://jsonplaceholder.typicode.com' });
    dispatch({type: 'FETCH_USER', payload: response.data });
});