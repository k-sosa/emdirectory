import React from "react";

export default function TextBox(props) {
    return(
        <div>
            <input type="text" placeholder="Filter by Last Name" className="form-control"  name="search"  value={props.search}  onChange={props.handleOnChange}  />
        </div>
    )
}