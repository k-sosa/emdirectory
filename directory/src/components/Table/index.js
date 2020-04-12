import React from 'react';
import "./index.css"
import TextBox from "../TextBox"

// props={
//     resultsArray: this.state.results
// }

function Table(props) {
    return (
        <div className="container">


            <h2 className="title">Employee Directory</h2>
            <br></br>
            <TextBox  search={props.search}   handleOnChange={props.handleOnChange}/>
            <table className="table">


                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col" >First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                 
                 {
                     props.resultsArray.map((person, i) => {
                         return (
                             <tr>
                                 <td>{i}</td>
                                 <td><img src={person.picture.thumbnail}  /></td>
                         <td>{person.name.first}</td>
                         <td>{person.name.last}</td>
                         <td>{person.email}</td>
                         <td>{person.phone}</td>
                             </tr>
                         )
                     })
                 }
                

                </tbody>
            </table>




        </div>

    )

}

export default Table
