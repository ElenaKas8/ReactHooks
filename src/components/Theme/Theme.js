//// Создать компонент Theme, сформировав DIV а внутри заголовок 2 уровня с значением 'Theme'
// внутри компонента создайте состояние theme, в качестве дефолтного значения укажите строку 'default value'
// Эту строку выведите в парагрфе под заголовком второго уровня
//компонент необходимо вызвать под Counter

import React, { useState } from 'react'


const Theme = () => {
     let[string, setstring] = useState('default value');

     let [theme, setTheme] = useState("light");
     
     function toUpperCase() {
       setstring(string.toUpperCase());
     }

function toLowerCase() {
  setstring(string.toLowerCase());
}

     
function initCap() {
  setstring(string[0].toUpperCase() + string.slice(1).toLowerCase());
}
function getValue() {
  let getValue=prompt();
  
}
function changeTheme() {
  let newTheme=(theme==="light")?"dark":"light";
  setTheme(newTheme);
}
  return (
  
    <div className={theme === "light" ? 'light' : 'dark'}>
      <h2>Theme</h2>
      <p>{string}</p>
      <button onClick={toUpperCase}>To Upper case</button>
      <button onClick={toLowerCase}>To Lower case</button>
      <button onClick={initCap}>Init Cap</button>
      <button onClick={getValue}>Set value</button>
      <p>Theme setting</p>
      <input type="checkbox" onClick={changeTheme}/>
    </div>
    
  )
}

export default Theme



// Задание 2
    // Реалоизуйте новую кнопку 'Init Cap', котоаря будет возводить в верхний регистр только первую букву состояния, а остальное в нижний регистр
// 'DEFAULT value'    => 'Default value'
// Задание 3
    // Реалоизуйте новую кнопку 'Set Value' => она должна определять 
    //новое строкове значение из моадльного окна 