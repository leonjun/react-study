import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
class CommentApp extends Component{
    constructor(props){
        super(props);
        this.state={
            comment:[],
            content:"<h1>this is a content</h1>"
        }
        console.log(1)
    }
    componentWillMount(){
        this._loadComent();
        
        console.log("componentWillMount 组件挂载开始之前，也就是在组件调用 render 方法之前调用 像 Ajax 数据的拉取操作")
    }
    componentDidMount(){
        
       
        console.log("componentDidMount 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate update")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount 组件对应的 DOM 元素从页面中删除之前调用")
    }
    _saveComent(e){
        localStorage.setItem('coments',JSON.stringify(e))
    }
    _loadComent(){
        let coments =localStorage.getItem('coments');
        if(coments){
            coments=JSON.parse(coments);
            this.setState({comment:coments})
            
        }
        
    }
    handleSubmitComent=(e)=>{
        
        if(!e.name || !e.content || !e){
            return
        }
        
        const coments=this.state.comment;

        coments.push(e)
        this.setState({coments})
        this._saveComent(coments)
 
    }
    render(){
        console.log(5)
        return(
            <div className="wrap">
                <h1 style={{color:'red',fontSize:'40px'}}>111</h1>
                <div dangerouslySetInnerHTML={{__html:this.state.content}} ></div>
                
                <CommentInput onSubmit={this.handleSubmitComent} />
                <CommentList comments={this.state.comment} />
            </div>
        )
    }
}
export default CommentApp;