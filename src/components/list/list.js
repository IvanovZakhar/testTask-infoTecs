import ListItem from '../list-item/list-item';
import './list.css';

const List = ({data, onShowContent, onDelete}) => {

    
        const elements = data.map(item => {
            const {id, ...itemProps} = item;
         
            return(
                    <ListItem key={id}  {...itemProps} onShowContent={() => onShowContent(itemProps)} onDelete={() => onDelete(id)}/>
            )
        })
        return(
            <ul className="list">
                {elements}
            </ul>
        )
    }


export default List;