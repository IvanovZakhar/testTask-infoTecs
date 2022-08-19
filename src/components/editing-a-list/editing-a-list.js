import React, { useState } from 'react';
import StatusRadio from '../radio/radio';
import './editing-a-list.css';



const EditingAList = ({data, transformConditionName, transformConditionText, showCondition}) =>{
   
  const {name, text, classShow, id} = data;

  const [value, setValue] = useState('Введите имя');
  function chengeValue(e) {
        
    setValue(e.target.value);
    transformConditionName(e.target.value, id)
    
 }

  let className = 'editing-a-list' 
console.log(classShow)
  if(classShow === 'show'){
      className += ' show'
 
  }


 
  return(
      <div className={className}>
             
                  <input type="text"
                      className="form-control"
                      placeholder="Название"
                      name="name" 
                      defaultValue={name}
                      onClick={() => setValue(name)}
                      value={value}
                      onChange={(e) => chengeValue(e)}
                      />

                  <input type="text"
                      className="form-control"
                      placeholder="Текст"
                      name="text"
                      defaultValue={text} 
                      onChange={(e) => transformConditionText(e.target.value, id)}
                      />    


          <StatusRadio data={data} showCondition={showCondition}/>
      </div>
      
  )

}
   


    


export default EditingAList;