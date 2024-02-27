const Coba = (props) => {
    console.log(props);

    // websocket
    // Window.Echo.channel('trades')
    // .listen('NewTrade', (e) => {
    //     console.log(e.trade);
    // });

    return <h1>{props.phpVersion}</h1>;
};

export default Coba;
