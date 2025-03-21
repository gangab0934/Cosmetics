import { useState,useEffect } from "react";

const UseWindowSize = () => {
    const [windowSize,setWindowSize]=useState({
        height : undefined,
        width : undefined
    });

    useEffect( () => {
        const handleResize =() => {
            setWindowSize({
                width : window.innerWidth,
                height : window.innerHeight
            })

        }  
        handleResize();

        window.addEventListener("resize",handleResize);

        return () => window.removeEventListener("resize",handleResize) 
    }, [])
    return windowSize;
  
}

export default UseWindowSize