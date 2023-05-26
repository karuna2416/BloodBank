import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <header>
        <div id="navbar">
          <div className="nav">
            <div>
              <Link to="/admin" className="an">
                <ion-icon
                  name="person-circle-outline"
                  className="icon"
                ></ion-icon>{" "}
                Admin
              </Link>
            </div>

            <div>
              {" "}
              <Link to="/donor" className="an">
                <ion-icon name="person-outline" className="icon"></ion-icon>{" "}
                Donor
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/patient" className="an">
                <ion-icon name="medkit-outline" className="icon"></ion-icon>{" "}
                Patient
              </Link>
            </div>
            <div>
              <Link to="/about" className="an">
                {" "}
                <ion-icon name="mail-outline" className="icon"></ion-icon> About
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/" className="an">
                <ion-icon name="home-outline" className="icon"></ion-icon> Home
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-navbar-btn" onclick="menuHandel()">
          <ion-icon
            name="menu-outline"
            className="mobile-navbar-icon"
          ></ion-icon>
          <ion-icon
            name="close-outline"
            className="mobile-navbar-icon"
          ></ion-icon>
        </div>
      </header>
      {/* <img src="./img/blood-2842450_1280.jpg"alt="img not found"style={{height:"550px",width:"100%"}}/>
        <section className="quotes-section">
        <div className="quotes">
            <p>"Saving a life won’t cost you anything,Go ahead and donate blood"</p>
               <div> <img src="./img/heart-rate (4).png"alt="img not found"/></div>
        </div>
    </section> */}
    </div>
  );
};
