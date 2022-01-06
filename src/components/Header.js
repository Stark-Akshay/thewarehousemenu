import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return ( 
        <div id="top">
        <header>
            <h1 className="title-text">Welcome to Warehouse Café and Restaurant</h1>

            <nav>
                <p className="child-links"><Link to="/drinklists">Drinks</Link></p>
                <p className="child-links"><Link to="/breakfast">Breakfast & Lunch</Link></p>
                <p className="child-links"><Link to="/dinner">Dinner</Link></p>
            </nav>
        </header>
        <Outlet />
        <h1 className="title-text">Please select from above options to see the menu</h1>
        <div className="jus-center">
        <p className="cp-text">
    © Copyright 2022 The Warehouse Café and Restaurant. All rights reserved. Developed by <a href="https://www.linkedin.com/in/akshay-manoj-b97144179/">Akshay Manoj</a></p>
        
        </div>
       </div>
        
     );
}
 
export default Header;