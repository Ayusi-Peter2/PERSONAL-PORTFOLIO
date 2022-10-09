import React, { useEffect,useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const redirect = useNavigate()

  const [logins, setLogins] = useState({})
  const [fetchRes,setFetchRes]=useState({})

  useEffect(()=>{
    fetch("http://localhost:3000/admin")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)

        setFetchRes(fetchRes=>data)
  })
  },[])

  console.log(fetchRes)
  console.log(logins)


  function handleInput(e) {


    const key = e.target.name
    const value = e.target.value

    setLogins({ ...logins, [key]: value })


  }

  function handleSubmit(e) {
    e.preventDefault()
if(logins.username===fetchRes[0].username && logins.password===fetchRes[0].password){
  redirect("/dashboard")
  //set flag true
}
else{
  alert("Error: Incorrect username or password, please try again!")
}

  }


  return (
    <>
      <div className="login-body">
        <center> <h1> Admin Login Form </h1> </center>
        <form onSubmit={handleSubmit} className='form'>
          <div className="container">
            <label>Username : </label>
            <input onChange={(e) => { handleInput(e) }} type="text" placeholder="Enter Username" name="username" />
            <label>Password : </label>
            <input onChange={(e) => { handleInput(e) }} type="password" placeholder="Enter Password" name="password" />
            <button type="submit">Login</button>
            <input type="checkbox" checked="checked" /> Remember me
            <button type="button" class="cancelbtn"> Cancel</button>
            Forgot <a href="#"> password? </a>
          </div>
        </form>
      </div>
    </>

  )
}

export default Login