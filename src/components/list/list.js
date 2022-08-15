import ListItem from '../list-item/list-item';
import './list.css';

const List = ({data}) => {
        
        const elements = data.map(item => {
            return(
                <ListItem {...item}/>
            )
        })
        return(
            
            <ul className="list">
                {elements}
            </ul>
        )
    }


export default List;