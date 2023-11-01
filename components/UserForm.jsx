import React, { useEffect, useState } from "react";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "yup-phone-lite";

import axios from 'axios';

export default function UserForm() {

  const [message, setMessage] = useState(null);
  const [list, setList] = useState(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required.'),
    lastName: Yup.string().required('Last name is required.'),
    email: Yup.string().required('Email is required.').email('Email is invalid'),
    phone: Yup.string().phone().required('Valid phone number is required.')
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    console.log('on submit', data);
    axios.post('/api/customer', data)
    .then(res => {
      console.log('form response', res)
      if(res.data.submitted) {
        setMessage(res.data.message);
        reset();

        getList();
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function getList() {
    axios.get('/api/customer')
    .then(res => {
      console.log('get list', res);
      setList(res.data.customers)
    })
    .catch((error) => {
      console.log(error);
    });
  }
 
  return (
    <div className="userform">
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group">
            <label>First Name</label>
            <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}  placeholder='First Name'/>
            <div className="invalid-feedback">
              {errors.firstName?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} placeholder='Last Name' />
            <div className="invalid-feedback">
              {errors.lastName?.message}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder='Email address' />
          <div className="invalid-feedback"> 
            {errors.email?.message}
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input name="phone" type="text" {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} placeholder="ex. (999) 999-9999" />
          <div className="invalid-feedback">
            {errors.phone?.message}
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Marketing Budget</label>
            <input name="budget" type="number" {...register('budget')} className={`form-control ${errors.budget ? 'is-invalid' : ''}`}  placeholder='ex. 50000'/>
            <div className="invalid-feedback">
              {errors.budget?.message}
            </div>
          </div>

          <div className="form-group">
            <label>Timeline</label>
            <select name="timeline" {...register('timeline')}>
            <option value="none" defaultValue={''} disabled hidden>Select an Option</option> 
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
            </select>
            <div className="invalid-feedback">
              {errors.timeline?.message}
            </div>
          </div>
        </div>
        <button type="submit">
          <p>Submit</p>
        </button>
        {message && (
          <div id="form-message">
            <h3>{message}</h3>
          </div>
        )}
        <div className="collection-list">
          {list && (
            list.map((item, index) => {
              return (
                <div className="list-item" key={index}>
                  <p>{item.firstName} {item.lastName}</p>
                </div>
              )
            })
          )}
        </div>

      </form>
    </div>
  );
}