import './editing-a-list.css';

const EditingAList = ({name, text}) =>{

    console.log(name)
    console.log(text)
        return(
            <div className="editing-a-list">
                <div className="editing-a-list__name">{name}</div>
                <div className="editing-a-list__text">{text}</div>
            </div>
        )
    
}

export default EditingAList;