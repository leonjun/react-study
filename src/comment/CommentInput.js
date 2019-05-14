import React,{Component} from 'react';
class CommentInput extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"leon",
            content:"内容"
        }
    }
    handleChangeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleChangeContent=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=()=>{
        console.log(this.props)
        
        this.props.onSubmit(this.state)
    }
    render(){
        return(
            <div>
                
                <ul>
                    <li>
                        <label>用户名:</label>
                        <input value={this.state.name} onChange={this.handleChangeName} />
                    </li>
                    <li>
                        <label>评论内容:</label>
                        <textarea value={this.state.content} onChange={this.handleChangeContent} />
                    </li>
                    <li>
                        <button onClick={this.handleSubmit}>发布</button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default CommentInput;