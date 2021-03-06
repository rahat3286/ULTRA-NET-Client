import React, { useContext, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../App';
import './Addservice.css';


const AddService = () => {
    const [image, setImage] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '32dbb43d356182fea99f3eb509f510cb');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onSubmit = (data) => {
        const reviewsData = {
            image: image,
            title: data.title,
            price: data.price,
            description: data.description
        }
        console.log(data);
        fetch('https://boiling-journey-92823.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('New Service Has been added successfully')
                }
            })
    }



    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="container py-5">
                    <h1 className="text-brand">Add Service</h1>
                </div>
                <div>
                    <form className="addService-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="title" {...register("title", { required: true })} placeholder="Service Name" />
                        {errors.title && <span className="error">Title is required</span>}
                        <input name="price"  {...register("price", { required: true })} placeholder="Service price " />
                        {errors.price && <span className="error">Price is required</span>}
                        <input name="image" type="file" onChange={handleImageUpload} />
                        <input name="description" {...register("description", { required: true })} placeholder="Service Description" />
                        <br />
                        <button className="btn btn-brand text-white mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;