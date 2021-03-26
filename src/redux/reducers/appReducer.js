import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "../types";


const initialState ={
    loading: false , alert: { content: '' , type: 'danger'}
}
export  const AppReducer = (state = initialState , action)=>{


    switch (action.type){
        case HIDE_LOADER:

            return { ...state , loading: action.payload};

        case SHOW_LOADER:

            return { ...state , loading: action.payload};

        case SHOW_ALERT:
            return { ...state , alert:{...state.alert , ...action.payload}};

        case HIDE_ALERT:
            return { ...state , alert:{...state.alert , ...action.payload}};


        default:
            return state;
    }


}