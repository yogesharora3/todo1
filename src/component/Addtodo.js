import React,{Component} from 'react';
class Addtodo extends Component{
    state=({
        "item":""
    })
    
    handleChange=(e)=>{
        console.log(this.state);
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const k=document.querySelector('#item');
        console.log(k.value);
        if(k.value==="" || k.value===" "){
            alert("please enter the activity before  adding");
            document.querySelector('#item').focus();
        }else{
            this.props.Addtask(this.state);
        }
    }
    usable=(val)=>{
        console.log(val);
    }
    render(){
        
        return(
            <form  onSubmit={this.handleSubmit}>
             <label htmlFor="autocomplete-input">ADD TO DO</label>
            <input type="text"  id="item" className="autocomplete" onChange={this.handleChange}/>
            <button className="btn waves-effect waves-light" type="submit" >Add
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
            </form>
        );
    }
}
export default Addtodo ;