import React, { useState } from 'react';
import './radio.css' ;

const StatusRadio = ({data, showCondition}) => {
   
    const {classShow} = data;

    let className = 'radio' 

    if(classShow === 'show'){
        className += ' show'
    }



    
    // return(
    //     <ul className={className}>
    //         <li className='waiting'>Ожидание</li>
    //         <li className='in-progres'>В процессе</li>
    //         <li className='completed'>Выполнено</li>
    //     </ul>
    // )
    const [value, setValue] = useState(1);
   
    function chengeValue(e) {
        
       setValue(e.target.value);
       showCondition(e.target.value)
    }
 
    return (<div className={className}>
       <input type="radio" name="radio" value="waiting"
       checked={value === 'waiting' ? true : false}
       onChange={(e) => chengeValue(e)} 
     
       />
 
       <input type="radio" name="radio" value="in-progres"
       checked={value === 'in-progres' ? true : false}
       onChange={(e) => chengeValue(e)} />
 
       <input type="radio" name="radio" value="completed"
       checked={value === 'completed' ? true : false}
       onChange={(e) => chengeValue(e)} />
    </div>)
}

export default StatusRadio;