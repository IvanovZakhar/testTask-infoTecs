import './editing-a-list.css';

const EditingAList = ({data}) =>{
    const {name, text} = data;

    console.log(name)
    console.log(text)
    
        return(
            <div className="editing-a-list">
                
                <div className="editing-a-list__text">
                  {name}
                  {text}
                </div>
            </div>
        )
    
}

export default EditingAList;