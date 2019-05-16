import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
class CommentApp extends Component{
    constructor(props){
        super(props);
        this.state={
            comment:[]
        }
        console.log(1)
    }
    componentWillMount(){
        console.log("组件挂载开始之前，也就是在组件调用 render 方法之前调用 像 Ajax 数据的拉取操作")
    }
    componentDidMount(){
        console.log("组件挂载完成以后，也就是 DOM 元素已经插入页面后调用")
    }
    componentDidUpdate(){
        console.log("update")
    }
    componentWillUnmount(){
        console.log("组件对应的 DOM 元素从页面中删除之前调用")
    }
    handleSubmitComent=(e)=>{
        
        if(!e.name || !e.content || !e){
            return
        }
        this.state.comment.push(e)
        this.setState({
            comment:this.state.comment
        })
 
    }
    render(){
        console.log(5)
        return(
            <div className="wrap">
                <h1>111</h1>
                <CommentInput onSubmit={this.handleSubmitComent} />
                <CommentList comments={this.state.comment} />
            </div>
        )
    }
}
export default CommentApp;