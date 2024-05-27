import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  
  const {
    register, 
    handleSubmit,
    setError, 
    formState:{ errors, isSubmitting, isSubmitted }, 
  } = useForm();

  const delay= (d)=>{
    return new Promise((res, rej)=>{
      setTimeout(() => {
        res();
      }, d*1000);
    })
  }

  const onSubmit = async (data)=>{
    //await delay(2)
    let r =await fetch ("http://localhost:3000/", {method:"POST", headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res);
    
    // if(data.password !== "shoaib"){
    //   setError("myform", {message:"your form password is not right"})
    // }
    // if(data.password === "myself"){
    //   setError("blockedUser", {message:"dont provide the entry to myself"})
    // }
}
  return (
    <>
    {isSubmitting && <div>loading</div>}
    {isSubmitted && <div>Submitted succesfully</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username")} type="text" placeholder='username' />
          <br />
          <input {...register("password", { required: {value:true, message:"this field is required"}, minLength: {value:3, message : "min length is 3"}, maxLength: {value:8, message: "Maximum length is exceeding the 8 characters"}})} type="password" placeholder='password'/>
          {errors.password && <div className="red">there is some Error in password {errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blockedUser && <div className="red">{errors.blockedUser.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
