import { Component } from 'react';
import './app.css';
import List from '../list/list';
import EditingAList from '../editing-a-list/editing-a-list';


class App extends Component{
    constructor(props){
        super()
        this.state = {
            data: [
                {name:'lorem lorem', text:'test text waiting', condition:'waiting', id: 1},
                {name:'lorem lorem', text:'test text in-progres', condition:'in-progres', id: 2},
                {name:'lorem lorem', text:'test text completed', condition:'completed', id: 3}
                
            ],
            test: [
               
            ]
        }
    }

    onSubmit = (item) => {
        this.setState(({test}) => {
            let data 
                if (test.lenght > 1){
                    data = ''
                }else{ 
                    data = {
                        name: item.name,
                        text: item.text
                    }
                }

            return{   
                test:  data
            }
        })
    }



    render(){
        return(
            <div className="app">
                <List data={this.state.data} onSubmit={this.onSubmit}/>
                <EditingAList data={this.state.test}/>
            </div>
        )
    }
}

export default App;