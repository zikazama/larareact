import { useState } from "react";

const Tombol = () => {
    let nilai = 10;
    const [count, setCount] = useState(0);

    function handleClick(){
        // alert('Hello');
        console.log(count);
        setCount(count++);
    }

    return (<button onClick={handleClick}>Klik {count}</button>)
}

export default Tombol;