import React, {useState,useEffect} from 'react';
import {getPostsComments} from '../api';


export const Comments = ({id}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getPostsComments(id).then(data => {
            const commentData = data.slice(-10);
            setComments(commentData);
        });
    }, [id])
    
    return comments.length > 0 && comments.map((c,i) => (
        <div className="card" key={i} data-testid="Comments__test">
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p style={{fontSize:'14px'}}>{c.body}</p>
                    <footer className="blockquote-footer">{c.name}</footer>
                    <small>Email: {c.email}</small>
                </blockquote>
            </div>
        </div>
    ))
}
