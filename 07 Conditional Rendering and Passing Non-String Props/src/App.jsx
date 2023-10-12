import React from "react"
import Joke from "../public/components/Joke"
import Jokes from "../public/jokeData"

/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

export default function App() {

    
// return (
//     <div>
//         <Joke 
//             punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
//             isPun={true}
//             upvotes={10}
//             downvotes={2}
//             comments={[{author: "", body: "", title: ""}]}
//         />
//         <Joke 
//             setup="I got my daughter a fridge for her birthday." 
//             punchline="I can't wait to see her face light up when she opens it." 
//             isPun={false}
//             pvotes={10}
//             downvotes={2}
//             comments={[{author: "", body: "", title: ""}]}
//         />
//         <Joke 
//             setup="How did the hacker escape the police?" 
//             punchline="He just ransomware!"
//             isPun={true}
//             pvotes={9}
//             downvotes={3}
//             comments={[{author: "", body: "", title: ""}]}
//         />
//         <Joke 
//             setup="Why don't pirates travel on mountain roads?" 
//             punchline="Scurvy." 
//             isPun={true}
//             pvotes={15}
//             downvotes={6}
//             comments={[{author: "", body: "", title: ""}]}
//         />
//         <Joke 
//             setup="Why do bees stay in the hive in the winter?" 
//             punchline="Swarm." 
//             isPun={true}
//             pvotes={12}
//             downvotes={2}
//             comments={[{author: "", body: "", title: ""}]}
//         />
//         <Joke 
//             setup="What's the best thing about Switzerland?" 
//             punchline="I don't know, but the flag is a big plus!" 
//             isPun={false}
//             pvotes={5}
//             downvotes={4}
//             comments={[{author: "", body: "", title: ""}]}
//         />
//     </div>
// )


//passing all jokes as an array on objects and passing jokes in component through map funcction
    // const jokeElements = Jokes.map(joke => {
    //     return <Joke setup={joke.setup} punchline={joke.punchline} />
    // })
    // return (
    //     <div>
    //         {jokeElements}
    //     </div>
    // )

    const jokeElements = Jokes.map(joke => <Joke setup={joke.setup} punchline={joke.punchline} />)
    
    return <div>{jokeElements}</div>
}