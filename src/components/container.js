import {useState, useEffect} from 'react';
import Card from './card.js';
import './container.css';
function Container(){
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then(response => response.json())
        .then(data => setContent(data))
    }, []);
    console.log(content);
    return(
        <div className='container'>
            {content.map((information) =>
                <Card data={information} />
            )}
            
        </div>
    )
}

export default Container;