const Mainhead = (props) => {
    return ( 
        <div className="main-box">
            <p className="cat-head">{props.catHead}</p>
            <p className="cat-desc">{props.catDesc}</p>
        </div>
     );
}
 
export default Mainhead;