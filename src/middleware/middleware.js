import {CREATE_POST} from "../redux/types";
import {setAlert} from "../redux/actions";

const forbidden =['fuck' , 'php' ,'spam'];



export const forbiddenWordsMiddleware = ({dispatch})=>{
    return (next)=>{
        return (action)=>{
            if(action.type === CREATE_POST){
                const found = forbidden.filter( word=>{
                    return  action.payload.title.includes(word)
                })
                if(found.length){
                    return dispatch(setAlert({content:"Has forbidden word", type:"success"}))
                }
            }else{
                return next(action);
            }
        }
    }
}
