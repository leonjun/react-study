//状态提升
import React,{Component} from 'react';
function UpOrDown(props){
    if(props.cilcis>=100){
        return <p>水开了</p>
    }else{
        return <p>水还没开</p>
    }
}
class State extends Component{
    constructor(props){
        super(props);
        this.state={
            cilcis:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            cilcis:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input value={this.state.cilcis} onChange={this.handleChange}/>
                <UpOrDown cilcis={this.state.cilcis} />
                <h1>状态提升</h1>
            </div>
        )
    }
}
export default State;