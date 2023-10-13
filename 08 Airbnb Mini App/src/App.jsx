import React from "react"
import Navbar from "../public/components/Navbar"
import Hero from "../public/components/Hero"
import Card from "../public/components/Card"
import data from "../public/data"
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
            key={item.id} 
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}

            //avoid passing many props , instead pass complete object
            // item={item}

            // ALSO JUST USE SPREAD OPERATOR TO PASS REST PROPS
            {...item}

            // added for badge
            openSpots={item.openSpots}

            />
            )
        })        
        
        return (
            <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div> 
    )
}