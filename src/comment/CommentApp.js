import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
class CommentApp extends Component{
    constructor(props){
        super(props);
        this.state={
            comment:[]
        }
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