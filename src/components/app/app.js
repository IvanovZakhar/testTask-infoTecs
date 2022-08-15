import { Component } from 'react';
import './app.css';
import List from '../list/list';
import EditingAList from '../editing-a-list/editing-a-list';

class App extends Component{
    constructor(props){
        super()
        this.state = {
            data: [
                {name:'lorem lorem', text:'test text', condition:'waiting'},
                {name:'lorem lorem', text:'test text', condition:'in-progres'},
                {name:'lorem lorem', text:'test text', condition:'completed'}
            ]
        }
    }
    render(){
        return(
            <div className="app">
                <List data={this.state.data}/>
                <EditingAList data={this.state.data}/>
            </div>
        )
    }
}

export default App;