import ListItem from '../list-item/list-item';
import './list.css';

const List = ({data, onSubmit}) => {

    
        const elements = data.map(item => {
            const {id, ...itemProps} = item;
         
            return(
                    <ListItem key={id}  {...itemProps} onSubmit={() => onSubmit(itemProps)}/>
            )
        })
        return(
            <ul className="list">
                {elements}
            </ul>
        )
    }


export default List;