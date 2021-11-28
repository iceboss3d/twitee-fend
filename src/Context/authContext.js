import React from "react";

let AuthContext = React.createContext(null);

function useAuth() {
    return React.useContext(AuthContext);
}

export {useAuth, AuthContext};