import React from 'react'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Signup() {
    const [credentials,setcredentials]= useState({name:'',email:'',password:'',location:''})
    const navigate = useNavigate()
const HandleSubmit= async(e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/createUser',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
    })
    const json = await response.json();
    console.log(json)

    if(!json.success){
        alert("Enter valid credentials !!!")
    }
    if(json.success){
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
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Address</label>
                    <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} id="location"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
            </form>

        </div>
        </>
    )
}
