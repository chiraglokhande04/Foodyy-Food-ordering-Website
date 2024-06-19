import React from 'react'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'


export default function Login() {
const [credentials,setcredentials]= useState({email:'',password:''})
 let navigate = useNavigate()
const HandleSubmit= async(e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
    })
    const json = await response.json();
    console.log(json)

    if(!json.success){
        alert("Enter valid credentials !!!")
    }
    if(json.success){
        localStorage.setItem('authToken',json.authToken);
        console.log(localStorage.getItem)
      navigate('/')
  }

}


const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}
    return (
        <>
        
        <div className='container'>
            <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
                <Link to='/createUser' className='m-3 btn btn-danger'>I'm a new User</Link>
            </form>

        </div>
        </>
    )
}

