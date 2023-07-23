import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = { user: null };

// console.log(initialState, "initialState here")

function reducer(state, action) {
    // console.log(action, "after refresh")
    switch (action.type) {
        case "login":
            return { user: action.payload }
        case "logout":
            return { user: null }
        default:
            return state;
    }
}
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const login = (userData) => {
        console.log(userData, "- userData after refersh")
        if (userData.token) {
            localStorage.setItem("accessToken", JSON.stringify(userData.token));
        }
        dispatch({
            type: "login",
            payload: userData.payload
        })
    }
    const logout = () => {
        localStorage.removeItem("accessToken")
        dispatch({
            type: "logout"
        })
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("accessToken"));
        console.log(token, "- token")

        async function checkUser() {
            if (token) {
                console.log("inside token")
                const responseFromBackendForValidUser = await axios.post('http://localhost:8000/get-current-user', { token });
                // console.log(responseFromBackendForValidUser.data.status, "responseFromBackendForValidUser")
                if (responseFromBackendForValidUser.data?.status == "Sucess") {
                    dispatch({
                        type: "login",
                        payload: responseFromBackendForValidUser?.data?.data
                    })
                }
            }
        }
        checkUser();



    }, [])

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;