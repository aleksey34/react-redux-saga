import {takeEvery , put , call} from "@redux-saga/core/effects";
import {FETCH_POSTS, REQUEST_POST} from "../types";
import {setAlert, setLoading} from "../actions";


export function * sagaWatcher(){
  yield  takeEvery(REQUEST_POST , sagaWorker)
}


function * sagaWorker(){

    try{
        yield put(setLoading(true))
        const payload  = yield call(fetchPosts)
        yield  put({type: FETCH_POSTS , payload})
        yield put(setLoading(false))
    }catch (e) {
        yield put(setLoading(false))
        yield put(setAlert({content:"Something is going wrong, try it late" , type: "primary"}))
    }





}

async function fetchPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return await response.json();
}