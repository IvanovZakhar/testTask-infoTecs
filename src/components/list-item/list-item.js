import './list-item.css';

const ListItem = ({name, text, condition}) => {

    return(
        <li className="list-item">
            <span className={condition}>{name}</span>
        </li>
    )
}

export default ListItem;