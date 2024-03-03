import React, { useState } from "react";

export default function Counter(props) {
  console.log(props);

  // useState
  const [value, setValue] = useState(props.value);

  // Динамический вывод классов
  function getClasses() {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";

    return classes;
  }

  // Функция изменения состояния счетчика (добавление)
  function handleIncrement() {
    setValue((prevState) => prevState + 1);
    console.log("value: ", value);
  }

  // Функция изменения состояния счетчика (вычитание)
  function handleDecrement() {
    setValue((prevState) => prevState - 1);
    console.log("value: ", value);
  }

  // Функция вывода либо числа либо строки "empty"
  function formatValue() {
    return value === 0 ? "empty" : value;
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getClasses()}>{formatValue()}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>
        +
      </button>
      <button className='btn btn-primary btn-sm m-2' onClick={handleDecrement}>
        -
      </button>
      <button
        className='btn btn-danger btn-sm m-2'
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
      <button className="btn btn-danger m-2"></button>
    </div>
  );
}
