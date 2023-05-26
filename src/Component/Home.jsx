import { Navbar } from "./Navbar";
import axios from "axios";
export const Home = () => {
    axios.get("http://localhost:3001/userList").then((res)=>{
        console.log(res)
    })
  return (
    <div>
      <Navbar />
      <img
        src="./img/blood-2842450_1280.jpg"
        alt="img not found"
        style={{ height: "550px", width: "100%" }}
      />
      <section className="quotes-section">
        <div className="quotes">
          <p>
            "Saving a life won’t cost you anything,Go ahead and donate blood"
          </p>
          <div>
            {" "}
            <img src="./img/heart-rate (4).png" alt="img not found" />
          </div>
        </div>
      </section>
    </div>
  );
};
