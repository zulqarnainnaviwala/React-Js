import React from "react";

export default function Card(props) {
  // added for badge text
  let textForBadge;
  if (props.openSpots === 0) {
    // if (props.item.openSpots === 0) {
    textForBadge = "SOLD OUT";
  } else if (props.location === "Online") {
    // else if(props.item.location === 'Online'){
    textForBadge = "ONLINE";
  }

  return (
    <div className="card">
      {/* added for badge text */}
      {textForBadge && <div className="card--badge">{textForBadge}</div>}

      {/* <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p> */}

      {/* <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p> */}

      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
