//事件处理
import React,{Component} from 'react';
function click(e){
    console.log(e)
    alert("hello")
}
class Events extends Component{
    constructor(props){
        super(props);
        this.state={isTrue:true};
        //this.toggleClick=this.toggleClick.bind(this)
    }
    toggleClick=()=>{
        this.setState(date=>({
            isTrue:!date.isTrue
        }))
    }
    render(){
        return(
            <div>
                <button onClick={this.toggleClick} >{this.state.isTrue?"已关注":"关注"}</button>
                <button onClick={click}>click</button>
                <h1>Events</h1>
            </div>
        )
    }
}
export default Events;