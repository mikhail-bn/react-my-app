import React, { useState } from "react"


export default function Counter() {
    const [counter, setCounter] = useState(0)
    const [tags, setTags] = useState(["tag1", "tag2", "tag3"])
    
    //const imageUrl = "https://picsum.photos/200"

    function getClasses() {
        let classes = "badge m-2 "
        classes += counter === 0 ? "bg-warning" : "bg-primary"

        return classes
    }

    function handleIncrement() {
        setCounter(counter + 1)        
        console.log('counter: ', counter);
    }
    function handleDecrement() {
        setCounter(counter - 1)        
        console.log('counter: ', counter);
    }

    function formatCount() {
        return (
            counter===0 ? "empty" : counter
        )
    }
    function handleTagChange(id) {
        setTags(prevState => prevState.filter(tag => tag !== id))
        console.log(id);
    }
    function renderTags() {
        if (tags.length === 0) {
            return "There are no any tags"
        }
        return (
            tags.map(tag => (
                <li key={tag} 
                    className="btn btn-primary btn-sm m-2"
                    onClick={() => handleTagChange(tag) }
                    >
                    {tag} 
                </li>
            ))
        )
    }

     return (
        <>
            <ul>
                {renderTags()}
            </ul> 
            <span className={getClasses()}>{ formatCount() }</span>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={ handleIncrement }
                >
                +
            </button>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={ handleDecrement }
                >
                -
            </button>
        </>
    )
}