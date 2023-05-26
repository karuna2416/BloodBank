import { Navbar } from "./Navbar"
export const About=()=>{
    return(
        <div>
            <Navbar/>
    <div class="about-section">
        <img src="./img/new.jpg" alt="Norway" style={{opacity:"0.5",height:"550px",width:"100%"}}/>
        <div className="text-block">
            <h1 style={{marginTop:"20px",color:"red",textAlign:"center",fontSize:"40px",marginBottom:"10px"}}> What is this all about ?</h1>
            <p style={{textAlign: "center",fontSize: "20px"}}> we solve the problem of blood amergencies </p>
            <p style={{textAlign: "center",fontSize: "20px"}}>byconnecting blood donors directly with people in blood need ....</p>
        </div>
      </div>

        </div>
    )
}