import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoad] = useState(true)

    const SignUp = (email, password) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoad(true)
        return signOut(auth);
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            const UserEmail = currentUser?.email || user?.email;
            setUser(currentUser)
            console.log("currentUser", currentUser);
            setLoad(false)
            const loggedUser = { email: UserEmail }
            // if user is exists then token generate  
            if (currentUser) {
                axios.post('https://car-doctor-server-seven-ochre.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => { console.log("token response", res.data); })
            }
            else {
                axios.post('https://car-doctor-server-seven-ochre.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => { console.log(res.data); })
            }
        });
        return () => Unsubscribe()
    }, [])


    const info = { user, loading, SignUp, Login, logout, }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;