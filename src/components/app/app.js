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
            content: [
               
            ]
        }
    }

    onShowContent = (item) => {
        this.setState(({content}) => {
            let data 
            let conditionNow;

            if(item.condition === 'waiting'){
                conditionNow = 'Ожидание'
            }else if(item.condition === 'in-progres'){
                conditionNow = 'В процессе'
            }else if(item.condition === 'completed'){
                conditionNow = 'Выполнено'
            }
                if (content.lenght > 1){
                    data = ''
                }else{ 
                    data = {
                        name: `Название: ${item.name} `, 
                        text: `Текст: ${item.name} `,
                        status: `Cостояние: ${conditionNow} `,
                        condition: item.condition,
                        classShow: 'show',
                        id: item.id
                    }
                }

            return{   
                content:  data
            }
        })
    }

    
    // С помощью данной функции при вызове события onDelete(который будет вызыватся в компонентне ListItem )..
    // .. мы будем получать id с this.state.data
    deleteItem = (id) => {
       this.setState(({data}) => {
        return {
            // далее на благодаря полученному id мы будем возвращать все элементы, кроме элемента с указанным id
            data: data.filter(item => item.id !== id)
        }
       })
    }

    showCondition = (con) =>{
        console.log(con)
    }

    


    render(){
        return(
            <div className="app">
                <List data={this.state.data} onShowContent={this.onShowContent} onDelete={this.deleteItem}/>
                <EditingAList data={this.state.content} showCondition={this.showCondition}/>
                
            </div>
        )
    }
}

export default App;