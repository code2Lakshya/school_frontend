'use client'
import { useForm } from 'react-hook-form';
import './Form.css';
import { useState } from 'react';

const Form = () => {
  const { handleSubmit, register ,reset} = useForm();
  const [loader,setLoader]=useState(false);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email', data.email);
    formData.append('image',data.image[0]);
    setLoader(true);
    fetch(process.env.NEXT_PUBLIC_BASE_URL + '/add',{
        method: 'POST',
        body: formData
    })
    .then((response)=>response.json())
    .then(res=>{
      console.log('Form Submitted Success');
      reset();
      alert('Form Submitted');
      setLoader(false);
    })
    .catch((error)=>{
      alert(error.message);
      setLoader(false);
    })
  };

  return (
    <div className='form'>
    <h3>Add School</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name', { required: 'Name is required' })} />
      </div>

      <div>
        <label>Address</label>
        <input {...register('address', { required: 'Address is required' })} />
      </div>

      <div>
        <label>City</label>
        <input {...register('city', { required: 'City is required' })} />
      </div>

      <div>
        <label>State</label>
        <input {...register('state', { required: 'State is required' })} />
      </div>

      <div>
        <label>Contact</label>
        <input
          type="tel"
          {...register('contact', {
            required: 'Contact number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Invalid contact number',
            },
          })}
        />
      </div>

      <div>
        <label>Image</label>
        <input type="file" {...register('image', { required: 'Image is required' })} />
      </div>


      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    {
      loader && <div id='loading'>
      <p>Submitting Form . Please Wait !</p>
      </div>
    }
    </div>
  );
};

export default Form;