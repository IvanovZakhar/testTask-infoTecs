import ListItem from '../list-item/list-item';
import ListAddForm from '../list-add-form/list-add-form';
import React, { useState } from 'react';
import './list.css';

const List = ({data, onShowContent, onDelete, onAdd}) => {

    
        const elements = data.map(item => {
            const {id, ...itemProps} = item;
         
            return(
                    <ListItem 
                        key={id}  
                        {...itemProps} 
                        onShowContent={() => onShowContent(itemProps, id)} 
                        onDelete={() => onDelete(id)}/>
            )
        })
        return(
            <ul className="list">
                {elements}
                <ListAddForm onAdd={onAdd}/>
            </ul>
        )
    }


export default List;