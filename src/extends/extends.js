//组合和继承
import React,{Component} from 'react';
function A(props){
    return(
        <div className={props.color}>
            {props.children}
        </div>
    )
}
function B(){
    return(
        <A color="blue">
            <h2>123</h2>
            <h3>444</h3>
        </A>
    )
}
class Exten extends Component{
    render(){
        return(
            <div>
                <B/>
                <h1>组合和继承</h1>
            </div>
        )
    }
}
export default Exten;