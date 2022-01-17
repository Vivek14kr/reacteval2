import { GET_TOKEN, LOGOUT } from "./actionTypes";

export const getToken = (token)=>{
    return (

        {
            type: GET_TOKEN,
            payload: token
        }
    )


}

export const logout = ()=>{
    return (
        {
            type: LOGOUT,
            payload:[]
        }
    )
}