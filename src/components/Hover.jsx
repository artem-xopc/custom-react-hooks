import { useRef } from "react";
import { useHover } from "../hooks/useHover";

function Hover () {
    const ref = useRef();
    const isHovering = useHover(ref);   
    return (
        <div ref={ref} style={{height: "300px", width: "300px", background: isHovering ? 'red' : 'blue'}}></div>
    )
}

export default Hover;