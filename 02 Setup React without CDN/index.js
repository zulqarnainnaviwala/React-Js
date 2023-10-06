//  what , where 
import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

//react version 17 supported for .render
// ReactDOM.render(navbar, document.getElementById("root"))

//react version 180 onwards supports .createRoot -- .render
ReactDOM.createRoot(document.getElementById("root")).render(navbar)


