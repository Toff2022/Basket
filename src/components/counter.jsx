import React,{ useState } from "react";
import CountersList from "./countersList";

const Counter = (props) => {
    const {value} = props
    // console.log(value)
    // console.log(props)

    const formatValue = ()=>{
        return value === 0 ? 'empty': value
    }
    const getBadgeClasses = ()=>{
        let classes = 'badge m-2 '
        classes += value === 0 ? 'bg-warning': 'bg-primary'
        return classes
    }

    // const handleIncrement = ()=>{
    //     // setValue((prevState)=>prevState + 1)
    //     console.log('inkrement')
    //     value+=1
        
    // }

    // const handleDecrement = ()=>{
    //     // setValue((prevState)=>prevState - 1)
    //     console.log('decrement')
    //     value -=1
    // }
return (
    <div>
        <span>{props.name}</span>
              <span 
                className= { getBadgeClasses() } > { formatValue() }
              </span>
        <button 
            className="btn btn-primary btn-sm m-2" 
            onClick={() => props.onIncrement(props.id, props.value)}
            >
                +
        </button>
        <button 
            className="btn btn-primary btn-sm m-2" 
            onClick={() => props.onDecrement(props.id, props.value)}
            >
                -
        </button>         
        <button 
            className="btn btn-danger btn-sm m-2" 
            onClick={() => props.onDelete(props.id)}>
                Delete
        </button>
    </div>
    )
}

export default Counter