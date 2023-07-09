import React from "react";

const link = "./backdropImg.jpg";

function Backdrop(){
    return (
        <div className="image_main">
            <img className="imgg" src={require('./backdropImg.jpg')}  alt="" />
            <div class="page_name">Computer Engineering</div>
            <div class="page_followers">142,765 Computer Engineers follow this</div>
        </div>
    )
}

export default Backdrop;