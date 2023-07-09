import React from "react";
import '../index.css'

const optionsLogo = "https://media.istockphoto.com/id/1396048367/vector/triple-dots-icon-vector-three-dots-as-a-symbol-of-menu-interface-or-more-options-3-ellipses.jpg?s=612x612&w=0&k=20&c=wCh-lsZlTRtE_AgnmqSmYRARZKfawhtObulGRV_FRd0="
const shareLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf28PDcYz2al-bVdv5mh6hEdRgSGh-2WDw_iQ3EEZKIGiyEGFJJ3QMDrORx60BS-_Olg&usqp=CAU"

function Card(props){
    console.log(props);
    return (
        <>
        <div className="cards">
            <div className="card">
            <img src={ props.imgsrc } alt="myPic" className="card__img" />
            <div className="card__info">
                <div className="upper">
                    <span className="card__category"> { props.title } </span>
                    <div className="name_and_op">
                        <h3 className="card__title"> { props.sname } </h3>
                        <button className="profile_options"><img className="profile_option_logo" src={optionsLogo} /></button>
                    </div>
                    <h4 className="card__sub__title"> { props.subname } </h4>
                    <a href={ props.link } target="_blank"></a>
                </div>
                
                <div className="profile">
                    <div className="user">
                        <img className="user_profile" src={ props.img } alt="myProfile" />
                        <h5 className="user_name">{ props.user_name }</h5>
                    </div>
                    <div className="profile_info">
                        <h6 className="view_count"> { props.views } </h6>
                        <button className="share_logo"> <img src={ shareLogo } alt="" className="share_logo_img" /> </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Card;