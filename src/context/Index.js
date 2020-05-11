import React,{Component} from 'react'
class Index extends Component{
    render(){
        return(
            <div>
                <Header />
                <Main/>
            </div>
        )
    }
}
class Header extends Component{
    render(){
        return (
            <div>
                <p>header</p>
                <Title/>
            </div>
        )
    }
}
class Main extends Component{
    render(){
        return (
            <div>
                <p>Main</p>
                
                <Content/>
            </div>
        )
    }
}
class Title extends Component{
    render(){
        return (
            <div>
                <p>Title</p>
            </div>
        )
    }
}
class Content extends Component{
    render(){
        return (
            <div>
                <p>Content</p>
            </div>
        )
    }
}
export default Index;