import { useEffect } from "react";
import { useState } from "react";

const Blouges = () => {
    const [blugs, setBlouges] = useState([]);
    useEffect(()=>{
        fetch('/public/Blouge.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blouges;