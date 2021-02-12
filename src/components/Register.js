import React from "react";
import "./assets/css/style.css";


import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
       <div className="wrapper">
           <div className="form-content">
            <div className="text-field">
            <form onSubmit={handleSubmit(onSubmit)}>
               <label>firstName</label>
               <input type="text" name="firstName" ref={register({required:true,maxLength:20})}/>
               {errors.firstName && errors.firstName.type=="required" && <span>sorry name is required</span>}
               {errors.firstName && errors.firstName.type=="maxLength" && <span>sorry the name must not exceed 20 caracters</span>}
               <label>lastName</label>
               <input type="text" name="lastName" ref={register({required:true,maxLength:20})}/> 
               {errors.lastName && errors.lastName.type=="maxLength" && <span>sorry lastname must not exceed 20 character</span>}
                {errors.lastName && errors.lastName.type=="required" && <span>sorry lastname is required</span>}
               <label>email</label>
               <input type="email" name="email" ref={register}/>
               {errors.lastName && errors.lastName.type=="maxLength" && <span>sorry lastname must not exceed 20 character</span>}
                {errors.lastName && errors.lastName.type=="required" && <span>sorry lastname is required</span>}
               <label>password</label>
               <input type="password" name="password" ref={register}/>
               {errors.lastName && errors.lastName.type=="maxLength" && <span>sorry lastname must not exceed 20 character</span>}
                {errors.lastName && errors.lastName.type=="required" && <span>sorry lastname is required</span>}
               <label>confirm password</label>
               <input type="password" name="passwordConfirm" ref={register}/>
               {errors.lastName && errors.lastName.type=="maxLength" && <span>sorry lastname must not exceed 20 character</span>}
                {errors.lastName && errors.lastName.type=="required" && <span>sorry lastname is required</span>}
                <input type="submit" onSubmit={()=>onSubmit()} value="submit"/>
           </form>
            </div>
            <div className="image"></div>

           </div>
       </div>
  
    )
} 