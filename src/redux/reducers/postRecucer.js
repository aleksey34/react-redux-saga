import {CREATE_POST, FETCH_POSTS} from "../types";

const initialState = {
posts: [] , fetchedPosts: []
}

// Pure function
export const PostReducer = (state = initialState , action)=>{
    switch (action.type) {

        case CREATE_POST:
            return { ...state , posts: [action.payload , ...state.posts] };
        case FETCH_POSTS:
            return { ...state , fetchedPosts: action.payload }

        default:
            return state;
    }

}