import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo'
import Addtodo from './component/Addtodo';
class App extends Component{
  state={
    todo:[
      // {'item':'read a book','id':1},
    // {'item':'i have to do coding','id':2}
  ]
  }
  Addtask=(task)=>{
     let todoArray=[...this.state.todo];
     console.log(todoArray);
    //  console.log((todoArray[todoArray.length-1].id));
     if(todoArray.length>0){
       task.id=(todoArray[todoArray.length-1].id)+1;
     }else{
       task.id=1;
     }
   todoArray.push(task);
   this.setState({
     todo:todoArray
   })
  }
  Delete=(id)=>{
    let Array1=[...this.state.todo].filter((value)=>{
      return value.id !==id;
    });
    this.setState({
      todo:Array1
    })
  }
  Update=(id)=>{
    console.log(id);
   let updatedValue=prompt("change the value");
   console.log(updatedValue);
   let Regex=/^\s+/;
   console.log(Regex.test(updatedValue));
   if(updatedValue!== null && !Regex.test(updatedValue) ){
     let Array2=[...this.state.todo];
   for(var i=0;i<Array2.length;i++){
     if(Array2[i].id===id){
       Array2[i].item=updatedValue;
     }
   }
   this.setState({
     todo:Array2
   })
   }
  }
  render(){
    return (
      <div className="container c1"><h2 className="center card-panel deep-orange darken-2 ">To Do List</h2>
      <Todo todo={this.state.todo} Delete={this.Delete} Update={this.Update}/>
      <Addtodo  Addtask={this.Addtask}  />
      </div>
    );
  }
}



export default App;
