import React, { useState } from "react";
import Counter from "./counter";

export default function CountersList() {
  const [counters, setCounters] = useState([
    { id: 0, value: 1, name: "milk,l" },
    { id: 1, value: 2, name: "eggs,doz" },
    { id: 2, value: 3, name: "potato,kg" },
    { id: 3, value: 2, name: "flour,kg" },
    { id: 4, value: 1, name: "fish,kg" },
    { id: 5, value: 1, name: "meat,kg" },
  ]);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => { 
    console.log('handleReset');
   }
  return (
    <>
      {counters.map((count) => {
        return (
          <Counter
            key={count.id}            
            onDelete={handleDelete}
            {...count}
          ></Counter>
        );
      })}
    </>
  );
}
