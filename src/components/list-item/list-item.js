// import EditingAList from '../editing-a-list/editing-a-list';
import './list-item.css';

const ListItem = ({name, id, condition, onShowContent, onDelete}) => {



    return(
            <li className="list-item" onClick={onShowContent} >
                <span className={condition}>{name}</span>
                <span className='del' onClick={onDelete} key={id}>x</span>
            </li>

    )
}

export default ListItem;