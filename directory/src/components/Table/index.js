import React from 'react';

// props={
//     resultsArray: this.state.results
// }

function Table(props) {
    return (
        <div className="container">




            <table className="table">


                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col">First</th>
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
