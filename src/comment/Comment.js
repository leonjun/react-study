import React,{Component} from 'react'
class Comment extends Component{
    constructor(){
        super()
        this.state={
            timeString:""
        }
    }
    static  propTypes={
        
    }
    componentWillMount(){
        this._getTimeString()
        setInterval(this._getTimeString,5000)
        
    }
    _getTimeString=()=>{
        let createTime=this.props.comment.createTime;
        const duration=(+Date.now()-createTime)/1000;
        this.setState({
            timeString:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`
        })
    }
    handleDelete=()=>{
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <span>{this.props.comment.name}：</span>
                <strong>{this.props.comment.content}</strong>
                <span style={{color:'red'}}>{this.state.timeString}</span>
                <span onClick={this.handleDelete} >删除</span>
            </div>
        )
    }
}
export default Comment;