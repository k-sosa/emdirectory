import React from 'react'

// props={
//     karen:"chicago",
//  phil:"test",
//handleOnClick: handleFormSubmit
// }

export default function Button({karen,phil, handleOnClick}){

    return (
        <div>
            <button onClick={handleOnClick}  >Save location: {karen} {phil}</button>
        </div>
    )
}