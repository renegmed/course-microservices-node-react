import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body }) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async () => {
        try{
            setErrors(null);
            const reponse = await axios[method](url, body); // function with arguments url and body
            return Response.data;

        } catch (err) {
            setErrors(
            <div className="alert alert-danger">
                <h4>Ooops....</h4>
                <ul className="my-0">
                    {err.response.data.errors.map( err => 
                    <li key={err.message}>{err.message}</li> )}
                </ul>
            </div>
            );
        }
    };

    return { doRequest, errors };
};