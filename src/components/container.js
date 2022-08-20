import {useState, useEffect} from 'react';
import Card from './card.js';
import './container.css';
function Container(){
    const [content, setContent] = useState([]);

    function handleClick() {
        fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then(response => response.json())
        .then(data => setContent(data))
    }

    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then(response => response.json())
        .then(data => setContent(data))
    }, []);

    return(
        <div className="outerBound">
            <div className='container'>
                {content.map((information) =>
                    <Card data={information} />
                )}
            </div>
            <button onClick={handleClick}>Click to retrieve different profiles</button>
        </div>
    )
}

export default Container;