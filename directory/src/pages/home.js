import React, { Component } from "react"
import Table from "../components/Table"
import Api from "../utils/api"
import TextBox from "../components/TextBox"



export default class Home extends Component {
    state = {
        search: "",
        results: [],
        original: []
    }
    //componentdidmount is onload, first loads the page, it assigns the name to chicago
    componentDidMount() {
        Api.randomPeople().then((response)=>{
            let apiResults= response.data.results
            console.log("array",apiResults.length)
            if(apiResults != undefined) {
                this.setState({
                    results: apiResults, original:apiResults
                }) 


                console.log(this.state.results)
            }
            
        }) 
        
    }
    handleOnChange = e => {
        const {name, value} = e.target

        this.setState({
            [name]: value//search:value
        })
      //  console.log(value)

      let newResult = this.state.results.filter(person=> {
          console.log(person.name.last, value)
          return(person.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1  || person.name.first.toLowerCase().indexOf(value.toLowerCase())>-1 )
      })

      if(value.length===0) {
          this.setState({
              results: this.state.original
          })
      }
      else{
        this.setState({
            results: newResult
        })
      }
      
    }

    


  
    render() {
        return (
            <div className="container">
                
                <Table   resultsArray={this.state.results} handleOnChange={this.handleOnChange} search={this.state.search} />
            </div>

        )

    }
}