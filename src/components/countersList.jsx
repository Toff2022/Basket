import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = ([
        {id:0, value:1, name: 'Ненужная вещь', price: '200'}, 
        {id:1, value:0, name: 'Ложка'}, 
        {id:2, value:0, name: 'Вилка'}, 
        {id:3, value:0, name: 'Тарелка'}, 
        {id:4, value:0, name: 'Набор минималиста'}, 
    ])

const [counters, setCounters] = useState(initialState)

const handleDelete = (id) => {
    // console.log('handleDelete:', id)
    const newCounters = counters.filter((counter) => counter.id !== id  )
    // console.log('newCounters', newCounters)
    setCounters(newCounters)
}
const handleReset = () => {
    setCounters(initialState)
}

const handleIncrement = (id, value)=>{
   const incrementValue = counters.map((elem) => {
    if(elem.id === id) {
        elem.value +=1
        return elem
    } else {
        return elem
    }
    }    
   )
   setCounters(incrementValue)
}

const handleDecrement = (id, value)=>{
    const decrementValue = counters.map((elem) => {
        if(elem.id === id) {
            elem.value -=1
            return elem
        } else {
            return elem
        }
        }    
       )
       setCounters(decrementValue)
}
return (
        <>
        {counters.map((count) => (
            <Counter
             key={count.id}
             {...count}
             onDelete={ handleDelete }
             onIncrement={ handleIncrement }
             onDecrement={ handleDecrement }
             />
        ))}
        <button className="btn-primary btn-sm m-2"
         onClick={handleReset}>
            Сброс
        </button>
                
        </>
    )
}

export default CountersList
