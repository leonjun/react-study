//生命周期和state
import React,{Component} from 'react';
function Clock(props){
    return(
        <h2>{props.date.toLocaleTimeString()}</h2>
    )
}

class LifeCicle extends Component{
    constructor(props){
        super(props);
        this.state={date:new Date()}
    }
    componentDidMount(){
        this.time=setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.time)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <Clock date={new Date()} />
                <h1>state and lifeCicle</h1>
            </div>
        )
    }
}
export default LifeCicle;