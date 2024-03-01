import React, { useState } from "react"


export default function Counter() {
    // useState
    const [counter, setCounter] = useState(0)
    const [tags, setTags] = useState(["tag1", "tag2", "tag3"])   
    

    // Динамический вывод классов
    function getClasses() {
        let classes = "badge m-2 "
        classes += counter === 0 ? "bg-warning" : "bg-primary"

        return classes
    }

    // Функция изменения состояния счетчика (добавление)
    function handleIncrement() {
        setCounter(prevState => prevState + 1)        
        console.log('counter: ', counter);
    }

    // Функция изменения состояния счетчика (вычитание)
    function handleDecrement() {
        setCounter(prevState => prevState - 1)        
        console.log('counter: ', counter);
    }

    // Функция вывода либо числа либо строки "empty" 
    function formatCount() {
        return (
            counter===0 ? "empty" : counter
        )
    }
    // Функция изменения всего массива удаляющая тот элемент на который нажали
    function handleTagChange(id) {
        setTags(prevState => prevState.filter(tag => tag !== id))
        console.log(id);
    }
    // Функция проверки отсутствия переменных в массиве и рендер массива
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

        // ИЛИ

        // return tags.length !== 0 ? tags.map(tag => (
        //     <li key={tag} 
        //         className="btn btn-primary btn-sm m-2"
        //         onClick={() => handleTagChange(tag) }
        //         >
        //         {tag} 
        //     </li>
        // )) : "There are no any tags"

        // ИЛИ

        // return (
        //     tags.length !== 0 &&
        //     tags.map(tag => (
        //         <li key={tag} 
        //             className="btn btn-primary btn-sm m-2"
        //             onClick={() => handleTagChange(tag) }
        //             >
        //             {tag} 
        //         </li>
        //     ))
        // )
        
        
    }


    // Условный рендеринг

    if (tags.length !== 0) {
        return (<ul>{renderTags()}</ul>)
    }

    
     return (
        <>
            {/* <ul>
                {renderTags()}
            </ul>  */}
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