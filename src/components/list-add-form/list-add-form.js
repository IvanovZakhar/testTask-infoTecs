import { Component } from "react";
import './list-add-form.css'

class ListAddForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: ''
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({
            name: ''
        })
    }

    render(){
        return(
            <div className="list-add-form">
                <h3>Добавьте новую заметку</h3>
                <form className="add-form">
                    <input type="text"
                        className="form-control"
                        placeholder="Название"
                        name="name" 
                        onChange={this.onValueChange}
                        value={this.state.name}/>

                    <button type="submit"
                            className="btn"
                            onClick={this.onSubmit}>Добавить</button>    
                </form>
            </div>
        )
    }
}

export default ListAddForm;