import React,{Component} from "react"

import Button from "../components/Button"

export default class Home extends Component {
    state = {
        name:""
    }
//componentdidmount is onload, first loads the page, it assigns the name to chicago
   componentDidMount(){
        this.setState({
            name:"Chicago"
        })
   }

   handleFormSubmit=()=>{
       alert("Hi Karen")
   }
    render() {
        return(
            <div>
            <Button handleOnClick={this.handleFormSubmit} karen={this.state.name}  phil="test" />
        </div>

        )
    
    }
}