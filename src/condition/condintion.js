//条件渲染
import React,{Component} from 'react';
function A(){
    return(
        <h1>A</h1>
    )
}
function B(){
    return (
        <h1>B</h1>
    )
}
function IsAorB(props){
    console.log(props)
    const flag=props.ishow;
    if(flag){
        return <A/>
    }else{
        return <B/>
    }
}
// ----------------
function Login(props){
    return(
        <button onClick={props.onClick}>
            login
        </button>
    )
}
function Loginout(props){
    return(
        <button onClick={props.onClick}>
            loginout
        </button>
    )
}
class Condition extends Component{
    constructor(props){
        super(props);
        this.state={ishow:true};
        // this.handleLogin=this.handleLogin.bind(this);
        // this.handleLoginout=this.handleLoginout.bind(this)
    }
    handleLogin=()=>{
        this.setState({
            ishow:true
        })
    }
    handleLoginout=()=>{
        this.setState({
            ishow:false
        })
    }
    render(){
        const isshow=this.state.ishow;
        let button=null;
        if(!isshow){
            button=<Login onClick={this.handleLogin}/>
        }else{
            button=<Loginout onClick={this.handleLoginout}/>
        }
        return (
            <div>
                <IsAorB ishow={isshow}/>
                
                {button}
                <h1>条件渲染</h1>
            </div>
        )
    }
}
export default Condition;