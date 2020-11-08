import React, { useState } from 'react';
import UserContext from 'context/UserContext';

const UserProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const user = {
        isLogged, setIsLogged,
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;