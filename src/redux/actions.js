import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT,REQUEST_POSTS } from "./type";

export function showLoading(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoading(){
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text){
    return dispatch => {
        dispatch({
            type: SHOW_ALERT, 
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())  
        }, 2000);
    }
}

export function hideAlert(){
    return {
        type: HIDE_ALERT
    }
}

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}




export function fetchPost() {

    return {
        type: REQUEST_POSTS
    }

    // return async dispatch => {
    //     try {
    //         dispatch(showLoading())
    //         const response = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         const json = await response.json()

    //         setTimeout(() => {
    //             dispatch({type: FETCH_POSTS, payload: json})
    //             dispatch(hideLoading())    
    //         }, 500);
    //     } catch (error) {
    //         dispatch(showAlert("" + error))
    //         dispatch(hideLoading())    
    //     }
        
    // }
    
}