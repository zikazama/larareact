import React from "react";
import { usePage, useForm } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../States/form/formAction";

const Form = (props) => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.form.email);
    console.log(props);

    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addEmail(data.email));
        post(route("form.create"));
    }

    return (
        <div>
            <h1>Registraction</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                </div>
                <div className="formGroup">
                    <button className="count_btn" type="Submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
