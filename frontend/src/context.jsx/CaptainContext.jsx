import { createContext, useState, useContext, Children } from "react";

export  const CaptainDataContaxt = createContext();


const CaptainContext = ({ children}) =>{
    const  [captain, setCaptain] = useState(null)
     const  [isLoding, setIsLoding] = useState(false)
     
      const  [error, setError] = useState(null)


      const updateCaptain = (captainData) => {


        setCaptain(captainData);
      };


      const value = {
        captain,
        setCaptain,
        isLoding,
        setIsLoding,
        error,
        setError,
        updateCaptain

      };

      return (
        <CaptainDataContaxt.Provider value={value}>
            {children}
        </CaptainDataContaxt.Provider>
      );
};

export default CaptainContext;