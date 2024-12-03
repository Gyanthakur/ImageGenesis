import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiox from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token , setToken] = useState(localStorage.getItem('token'))
    // const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') :false);
    const [credits, setCredits] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const loadCreditsData = async ()=>{
        try {
            const {data} = await axiox.get(backendUrl + '/api/user/credits', {headers: {token}})
            if(data.success){
                setCredits(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }


    const generateImage = async (prompt)=>{
        try {
            const {data} = await axiox.post(backendUrl + '/api/image/generate-image', {prompt}, {headers: {token}})

            if(data.success){
                loadCreditsData();
                return data.resultImage
            }
            else{
                toast.error(error.message);
                loadCreditsData()
                if(data.creditBalance === 0){
                    navigate('/buy');

                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    }



    useEffect(()=>{
        if(token){
            loadCreditsData();
        }
    },[token])

    const value = {
        user,setUser,
        showLogin,setShowLogin,
        backendUrl,
        token, setToken,
        credits, setCredits,
        loadCreditsData,
        logout,
        generateImage,
        
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider