import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const { user } = useAuth()
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} placeholder='email' {...register("email", { required: true })} />
                <input placeholder='phone number' {...register("phone", { required: true })} />
                <input placeholder='address' {...register("address", { required: true })} />
                <input placeholder='city' {...register("city", { required: true })} />

                {errors?.email && <span className='error'>This field is required</span>}

                <input className="local-button " type="submit" />
            </form>
        </div>
    );
};

export default Shipping;