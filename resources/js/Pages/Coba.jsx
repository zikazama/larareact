const Coba = (props) => {
    console.log(props);

    // websocket
    window.Echo.channel("messages").listen(
        "NewMessageNotification",
        (event) => {
            console.log("New message:", event.message);
        }
    );

    window.Echo.private("private-chat." + receiverId).listen(
        "NewPrivateMessageNotification",
        (event) => {
            console.log("New private message:", event.message);
        }
    );

    return <h1>{props.phpVersion}</h1>;
};

export default Coba;
