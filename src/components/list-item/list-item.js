// import EditingAList from '../editing-a-list/editing-a-list';
import './list-item.css';

const ListItem = ({name, text, condition, onSubmit}) => {
    
  

    return(
            <li className="list-item" onClick={onSubmit}>
                <span className={condition}>{name}</span>
            </li>

    )
}

export default ListItem;