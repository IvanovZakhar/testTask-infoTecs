import StatusRadio from '../radio/radio';
import './editing-a-list.css';

const EditingAList = ({data, showCondition}) =>{
   
    const {name, text, condition, status} = data;


        return(
            <div className="editing-a-list">
                <div className="editing-a-list__condition"><span className={condition}>{status}</span></div>
                <div className="editing-a-list__name"><br/><span>{name}</span></div>
                <div className="editing-a-list__text"><br/>{text}</div>
                <StatusRadio data={data} showCondition={showCondition}/>
            </div>
            
        )
    
}

export default EditingAList;