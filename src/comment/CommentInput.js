import React,{Component} from 'react';
class CommentInput extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            content:"",
            createTime:""
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
    componentWillMount(){
        this._loadName()
        
    }
    componentDidMount(){
        console.log(this.props)
        this.input.focus()
    }
    componentDidUpdate(){
        console.log(this.props)
    }
    handleSubmit=()=>{
        console.log(123123123)
        console.log(this.props)
        
        this.props.onSubmit({
            name:this.state.name,
            content:this.state.content,
            createTime:+new Date()
        })
    }
    _loadName(){
        const name=localStorage.getItem('name');
        if(name){
            this.setState({name})
        }
    }
    _saveName(e){
        localStorage.setItem('name',e)
    }
    handleBlur=(e)=>{
        this._saveName(e.target.value)
    }
    render(){
        return(
            <div>
                
                <ul>
                    <li>
                        <label>用户名:</label>
                        <input value={this.state.name} onBlur={this.handleBlur} onChange={this.handleChangeName} />
                    </li>
                    <li>
                        <label>评论内容:</label>
                        <textarea ref={(input)=>this.input=input} value={this.state.content} onChange={this.handleChangeContent} />
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