import React from "react";

const Story = ({data, resetStory}) => {
    return(
        <div>
            <p>There was a {data.color} {data.noun1} who loved a {data.adjective} {data.noun2}</p>
            <button onClick={() => resetStory()}>Reset</button>
        </div>
    )
}

export default Story;