import React, { Component } from "react"
import Table from "../components/Table"
import Api from "../utils/api"



export default class Home extends Component {
    state = {
        name: "",
        results: []
    }
    //componentdidmount is onload, first loads the page, it assigns the name to chicago
    componentDidMount() {
        Api.randomPeople().then((response)=>{
            let apiResults= response.data.results
            console.log("array",apiResults.length)
            if(apiResults != undefined) {
                this.setState({
                    results: apiResults
                }) 


                console.log(this.state.results)
            }
            
        }) 
        
    }

  
    render() {
        return (
            <div>
                <Table resultsArray={this.state.results} />
            </div>

        )

    }
}