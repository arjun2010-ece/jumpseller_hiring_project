import React,{useState,useEffect} from 'react';
import {getPostsDetails} from '../api';
import {Link} from 'react-router-dom';
import {Comments} from './Comments';

export const PostDetails = (props) => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);

    const {id}= props.match.params;
    useEffect(() => {
        setLoading(true);
        getPostsDetails(id).then(data => {
            setDetail(data);
            setLoading(false);
        });

      }, [id]);

    const showLoading = () => (
        loading && (
            <div className="col-md-6 offset-md-3 mt-5">
                <div className="text-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p>
                    <strong>Please wait the content is being loaded from servers</strong>
                    </p>
                </div>
            </div>
      )
    )

    const showDetails = () => (
        !loading && (Object.entries(detail).length > 0 && detail.constructor === Object) &&(
            <div className="row mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <Link className="text-info" to='/'><p>Back to Home</p></Link>
                            <h4 className='text-center'>Post detail - {`${id}`}</h4>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title text-center mt-2 mb-4">{detail.title}</h3>
                            <p className="card-text">{detail.body}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <h3>Comments section</h3>
                    <Comments id={id} />
                </div>
            </div>
        )
    )

    const showPostNotFound = () => (
        !loading && (Object.entries(detail).length === 0 && detail.constructor === Object) && (
            <div className="col-md-6 offset-md-3 mt-5">
            <h2 className="text-center">Posts Not Found</h2>
            </div>
        )

    )

    return (
        <div className="container-fluid" data-testid='postdetail__test'>
            {showLoading()}
            {showPostNotFound()}
            {showDetails()}
        </div>
    )
}
