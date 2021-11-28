import React, { useState } from 'react'
import { AuthContext } from "./authContext";
import { authProvider } from "./auth";

export default function AuthenticationProvider({children}) {
    const [user, setUser] = useState({});

    let login = (newUser, callback) => {
        return authProvider.login(newUser, (res) => {
            setUser(res);
            callback();
        });
    };

    let logout = (callback) => {
        return authProvider.logout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, login, logout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}