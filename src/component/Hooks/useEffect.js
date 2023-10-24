import React, { useEffect, useState } from 'react';
import "./style.css";

const UseEffect = () => {
  //const initialData = 10;
  const [myNumb, setMyNumb] = useState(0);

  useEffect( () => {
    //console.log('hii');
    document.title = `Chats(${myNumb})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNumb}</p>
        <div class="button2" onClick={ () => setMyNumb(myNumb + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCER
        </div>
      </div>
    </>
  );
}

export default UseEffect
