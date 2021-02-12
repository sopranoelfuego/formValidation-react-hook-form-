import React,{useRef} from "react";
import "./assets/css/style.css";


import { useForm } from "react-hook-form";

export default function Register() {

  const { register, handleSubmit, watch, errors } = useForm();
  const passConfirm=useRef()
  passConfirm.current=watch("passwordConfirm")
  const onSubmit = data => console.log(data);

  console.log(watch("firstName")); // watch input value by passing the name of it

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
               <input type="password" name="password" ref={register({required:true,minLength:5})}/>
               {errors.password && errors.password.type=="maxLength" && <span>sorry password must exceed minimum 5 character</span>}
                {errors.password && errors.password.type=="required" && <span>sorry password is required</span>}
               <label>confirm password</label>
               <input type="password" name="passwordConfirm" ref={register({required:true,
               validate:value=> value=== passConfirm.current
            })}/>
               {errors.lastName && errors.lastName.type=="maxLength" && <span>sorry  must miminum 6 character</span>}
                {errors.lastName && errors.lastName.type=="required" && <span>sorry password confirmation is required</span>}
                <input type="submit" value="submit"/>
           </form>
            </div>
            <div className="image"></div>

           </div>
       </div>
  
    )
} 