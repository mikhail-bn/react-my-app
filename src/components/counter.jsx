import React from "react"

export default function Counter() {
    const count = 0 
    const formatCount = () => {
        return (
            count===0 ? "empty" : count
        )
    }
     return (
        <>
            <span>{ formatCount() }</span>
            <button>+</button>
        </>
    )
}