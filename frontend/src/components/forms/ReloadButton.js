import React from "react";

const ReloadButton = ({reloadAbbrevs}) => {
    return (
        <div className="reloadDiv">
            <button onClick={reloadAbbrevs}>Click to refresh!</button>
        </div>
    )
}

export default ReloadButton;