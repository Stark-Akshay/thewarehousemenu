const Listsmall = (props) => {
    return ( 
        <div className="small-box">
            <div className="det-sec">
            <p className="desc">{props.desc}</p> 
            <p className="desc-2">{props.desc2}</p>
            </div>
            <p className="price">{props.price}</p>
        </div>
     );
}
 
export default Listsmall;