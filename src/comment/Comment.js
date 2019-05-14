import React,{Component} from 'react'
class Comment extends Component{
    render(){
        return(
            <div>
                <span>{this.props.comment.name}：</span>
                <strong>{this.props.comment.content}</strong>
            </div>
        )
    }
}
export default Comment;