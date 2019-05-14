import React,{Component} from 'react';
//form表单
function Options(){
    var arr=["a","b","c"];
    let opt=arr.map((arr)=>
        
        <option>{arr}</option>
    )
    return opt;
}
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"",
            textarea:"",
        }
    }
    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
        
    }
    handleSubmit=(e)=>{
        console.log(this.state.value)
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <h1>form</h1>
                <select value={this.state.value} onChange={this.handleChange}>
                    <Options />
                </select>
                <form onSubmit={this.handleSubmit}>
                    {/* <textarea value={this.state.value} onChange={this.handleChange}/> */}
                   {/* <input value={this.state.value} onChange={this.handleChange}/> */}
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default Form;