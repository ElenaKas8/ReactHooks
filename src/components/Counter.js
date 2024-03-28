
import React, { useState } from 'react';

// Жизненный цикл компонента: Монтирование => Обновление => Размонтирование

// useState - это хук, который заставляет компонент обновляться

// useState - это функция, которая при вызове заставляет компонент обновляться

const Counter = () => {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0){
      setCount(count - 1);
    }
   
   
  }


  //реализуйте еще одну кнопкуЮкоторая будет вызывать модальное окно promt и заменить значение состояния 
  //проверка или введенніе данніе число
function setValue(){
  let answer=prompt();
  if (isNaN(answer)){
    alert("Введеное значение не число");
  }else {
    setCount(+answer);
  }
  
  
 
}
  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={setValue}>Set value</button>
    </div>
  );
};

export default Counter;


//напишите функцию которая будет проверять является ли введенное значение числом

//isNaN()


