import React, { useState, useContext } from "react";
import data from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [db, setDb] = useState(data.meetups);
    const [query, setQuery] = useState('');

return <AppContext.Provider value={{db, setDb, query, setQuery}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};