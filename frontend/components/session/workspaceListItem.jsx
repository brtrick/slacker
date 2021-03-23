import React from "react";

export default ({workspace, clickFunction}) => {
    console.log(workspace);
    return (
        <li className="workspaceListItem">
            <p>{workspace.name}</p>
            <button onClick={clickFunction} 
                    data-id={workspace.id}>
                    Open
            </button>
        </li>
    )

}
