import { useEffect } from "react";

const Coba = (props) => {
    console.log(props);

    useEffect(() => {
        window.Echo.channel('public').listen('Hello',(e)=>{
            console.log('go public');
            //code for displaying the serve data
            console.log(e); // the data from the server
         })
     
        // to connect the privatechannel
        //  window.Echo.private('test-channel.5').listen('PrivateTest',(e)=>{
        //     console.log('go private');
        //     //code for displaying the serve data
        //     console.log(e); // the data from the server
        //  })
        return () => {
            // channel.unsubscribe();
        };
    }, []);

    return <h1>{props.phpVersion}</h1>;
};

export default Coba;
