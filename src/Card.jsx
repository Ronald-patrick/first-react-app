import React, { Fragment } from 'react';

function Card(props)
{
    return(
        <div className="cards">
            <div className="card-pic">
                <img src={props.imgsrc} className="poster"></img>
            </div>
            <div className="genre"><b>{props.genre}</b></div>
            <div className="title"><b>{props.sname}</b></div>
            <button className="btn"><a href={props.links} target="_blank"><b>Watch Now</b></a></button>
        </div>
        
        
    );
}

export default Card;