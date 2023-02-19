import React, { useState } from 'react';

function BeerLike(props) {
    const [isClicked, setIsClicked] = useState("false");
    return(
        <li>
            <button
                onClick={() => {
                    setIsClicked(!isClicked);
                }}
            >
                {isClicked ? "Like" : "Liked"}
            </button>
        </li>
    )
}

export default BeerLike;