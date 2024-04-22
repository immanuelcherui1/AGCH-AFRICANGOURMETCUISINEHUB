import { useState, useEffect } from 'react';
import axios from 'axios';
import './Comments.css';


function Comments() {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [testimony, setTestimony] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/comments')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = { name, testimony };
        axios.post('http://localhost:5000/api/comments', newComment)
            .then(response => {
                setComments([...comments, response.data]);
                setName('');
                setTestimony('');
            })
            .catch(error => console.error('Error posting comment:', error));
    };
    return (
        <div id="testimony-form">
            <h2>Share Your Idea</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="testimony-name">Name:</label>
                <input 
                    type="text"
                    id="testimony-name"
                    name="testimony-name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required 
                />
                <label htmlFor="testimony-message">Testimony:</label>
                <textarea 
                    id="testimony-message"
                    name="testimony-message"
                    rows="4"
                    value={testimony}
                    onChange={e => setTestimony(e.target.value)}
                    required
                />
                <button type="submit">Submit Testimony</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.name}: {comment.testimony}</li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;