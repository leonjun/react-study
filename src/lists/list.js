import React,{Component} from 'react';
const numbers=[1,2,3,4,5];
const listItem=numbers.map((number)=>
    <li>{number}</li>
)
function ListItem(props){
    return(
        <li>{props.value}</li>
    )
}
function NumberList(props){
    const numbers=props.nums;
    console.log(numbers)
    const listItem=numbers.map((number,index)=>
        
        <ListItem key={index} value={number}></ListItem>
    )
    return(
        <ul>
            {listItem}
        </ul>
    )
}
class List extends Component{
    render(){
        let nums=[2,2,2,4,5,6]
        return(
            <div>
                <NumberList nums={nums}/>
                {/* <ul>{listItem}</ul> */}
                <h1>列表</h1>
            </div>
        )
    }
}
export default List;