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
        <h1 className="title-text"><a href="#top">Please select from above options to see the menu</a> </h1>
        </div>
        
     );
}
 
export default Header;