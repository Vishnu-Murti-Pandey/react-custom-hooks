import { useEffect, useRef } from "react";

export const usePrevious = (count) => {
    
    const countRef = useRef();

    useEffect(() => {
        countRef.current = count;
    }, [count]);


    return countRef.current;
}
