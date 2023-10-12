import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}
// -----------OR by Destructure props, cause props is an object and we can choose specific properties by Destructuring props  -------------------
/* e.g
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/

// export default function Contact({img,name,phone,email}) {
//     return (
//         <div className="contact-card">
//             <img src={img} />
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

