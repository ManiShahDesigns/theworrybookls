import React from 'react'

function ThoughtsList() {

    // const getThoughtsFromLS = () => {
    //     let thoughts = [];
    //     if (JSON.parse(localStorage.getItem('thought')) !== null) {
    //         thoughts = JSON.parse(localStorage.getItem('thought'))
    //         thoughts = thoughts.map((thought) => <li key={thought.id}>
    //             <a href="#" onClick={editState}>{thought.description}</a>
    //         </li>)
    //     }
    //     return thoughts;
    // }

    return (
        <div className="thoughts-list">
            <ul>
                {/* {getThoughtsFromLS()} */}
            </ul>
        </div>
    )
}

export default ThoughtsList
