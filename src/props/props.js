//组件和props
import React,{Component} from 'react' ;

//自定义组件 名称必须大写
function Wel(props){
    return( <h1>world,{props.name}</h1>)
}
class PropsD extends Component{
    render(){
        return(
            //返回值只能有一个根元素
            <div>
            <h2>hello</h2>
            <Wel name="leon"/>
            <Wel name="jun"/>
            </div>
        )
        
        
    }
}
export default PropsD;