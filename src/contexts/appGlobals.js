import React, { createContext } from 'react';

export const appGLobalsContext = createContext();

export const AppGlobalsProvider = props => {
    const { children, ...globals } = props;

    return <appGLobalsContext.Provider value={globals}>
        {children}
    </appGLobalsContext.Provider>
}