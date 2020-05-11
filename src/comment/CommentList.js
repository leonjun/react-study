import React,{Component} from 'react';
import Comment from './Comment';
class CommentList extends Component {
    static defaultProps={
        comments:[]
    }
    componentDidMount(){
        
    }
    render(){
        let arrs=[
            {name:"leon",content:"jun"},
            {name:"andy",content:"lau"}
        ]
        return(
            <div>              
                <div>             
                {this.props.comments.map((arr,index)=>{
                     return <Comment comment={arr} key={index}/>
                })}
                </div>
                
            </div>
        )
    }
}
export default CommentList;