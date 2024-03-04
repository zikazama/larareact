import React from "react";
import { usePage, useForm, router } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../States/form/formAction";

const Image = (props) => {
    // const dispatch = useDispatch();
    const email = useSelector((state) => state.form.email);
    console.log(props);

    const { data, setData, post, errors } = useForm({
        image: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/image', data, {
            forceFormData: true,
        });
    }

    return (
        <div>
            <h1>Registraction</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="image">Photo: </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        // value={data.image}
                        onChange={(e) => setData("image", e.target.files[0])}
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

export default Image;
