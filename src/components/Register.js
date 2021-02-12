import React,{useRef} from "react";
import "./assets/css/style.css";


import { useForm } from "react-hook-form";

export default function Register() {

  const { register, handleSubmit, watch, errors } = useForm();
  const passConfirm=useRef()
  passConfirm.current=watch("passwordConfirm")
  const onSubmit = data => console.log(data);

  console.log(watch("firstName")); // this whatch is like a observ to the specific dom element
   // watch input value by passing the name of it

  return (
       <div className="wrapper">
           <div className="form-content">
            <div className="text-field">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>              
                   <label>firstName</label>
               <input type="text" name="firstName" ref={register({required:true,maxLength:20})}/>
               
               {errors.firstName && errors.firstName.type=="required" && <span className="error">sorry name is required</span>}
               {errors.firstName && errors.firstName.type=="maxLength" && <span className="error">sorry the name must not exceed 20 caracters</span>}
               </div>


               <div>

               <label>lastName</label>
               <input type="text" name="lastName" ref={register({required:true,maxLength:20})}/> 
               {errors.lastName && errors.lastName.type=="maxLength" && <span className="error">sorry lastname must not exceed 20 character</span>}
                {errors.lastName && errors.lastName.type=="required" && <span className="error">sorry lastname is required</span>}
               </div>

                <div>

                <label>email</label>
               <input type="email" name="email" ref={register}/>
               {errors.lastName && errors.lastName.type=="maxLength" && <span className="error">sorry lastname must not exceed 20 character</span>}
                {errors.lastName && errors.lastName.type=="required" && <span className="error">sorry lastname is required</span>}
              
                </div>

            <div>
            <label>password</label>
               <input type="password" name="password" ref={register({required:true,minLength:5})}/><br></br>
               {errors.password && errors.password.type=="maxLength" && <span className="error">sorry password must exceed minimum 5 character</span>}
                {errors.password && errors.password.type=="required" && <span className="error">sorry password is required</span>}
             
            </div>

               <div>
               <label>confirm password</label>
               <input type="password" name="passwordConfirm" ref={register({required:true,
               validate:(value) => value === passConfirm.current
            })}/>
            {errors.passwordConfirm && errors.passwordConfirm.type=="validate" && <span className="error">sorry  password are not match</span>}
                {errors.passwordConfirm && errors.passwordConfirm.type=="required" && <span className="error">sorry password confirmation is required</span>}
               
               </div>
               
               <div>
                     
                <input type="submit" value="submit" style={{fontSize:"20px"}}/>
               </div>

           </form>
            </div>
            <div className="image">

               <img src="./images/img.jpg" style={{height:"100%"}}/>
            </div>

           </div>
       </div>
  
    )
} 