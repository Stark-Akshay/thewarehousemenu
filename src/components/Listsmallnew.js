const Listsmallnew = (props) => {
    return ( 
        <div className="smallbox-new">
            <p className="desc">{props.desc}</p> 
            <div className="type-price">
            <p className="price">{props.price1}</p>
            <p className="price">{props.price2}</p>
            <p className="price">{props.price3}</p>
      
            </div>
            
        </div>
     );
}
 
export default Listsmallnew;