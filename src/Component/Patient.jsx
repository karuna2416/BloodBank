import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Patient=()=>{
    const [data,setdata]=useState({
        "username":"",
        "password":""
    })
    console.log(data)
    console.log(setdata)
// console.log({...data})
// console.log({data})
    return(
        <div>
<Navbar/>
    <section className="patient-section">
        <h2 className="heading">Patient login</h2>
        <form action="action_page.php" method="post">
            
            <div className="container">
    <label for="uname"><b>Username</b></label>
    <input value={data.username}type="text" placeholder="Enter Username" name="uname" required onChange={(e)=>{setdata({...data,username: e.target.value})}}/>
    {/* {console.log({value})} */}
    {console.log({setdata})}
    {console.log({data})}
    {/* {console.log(e)} */}
    {console.log({...data})}
    <label for="psw"><b>Password</b></label>
    <input value={data.password}type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>{setdata({...data,password:e.target.value})}}/>

    <button type="submit">Login</button>
    
  </div>
  <div className="container" style={{backgroundColor:"#f1f1f1"}}>
        <span className="ps">Does not have an account? <Link to="/patientsignup">click here to register</Link></span>

</div>
</form>

</section>
        </div>
    )
}