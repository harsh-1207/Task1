import React from "react";
import Card from "./Card"
import Sdata from "./Sdata"

function Scroll(){
    return (
        <>
            {Sdata.map((val) => {
            return (
                <Card 
                
                key={ val.id }

                imgsrc={ val.imgsrc }
                title={ val.title }
                sname={ val.sname }
                subname={ val.subname }
                link={ val.link }
                img={val.img}
                user_name={val.user_name}
                views={val.views}
                share_link={val.share_link}
                />
            );
            })}
        </>
    )
}

export default Scroll;