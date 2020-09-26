import React from 'react';
import './App.css';
import { Comment } from './App'

interface Props {
    comments: Comment[]
}

export default class ActionBar extends React.Component<Props> {

    getComments() {
        return this.props.comments.map(comment =>
            <div className="mb-3">
                <p className="communication-comment-user my-0">
                    {comment.user}
                </p>
                <p className="communication-comment-body my-0">
                    {comment.body}
                </p>
            </div>
        )
    }

    render() {
        return <div className=" bg-light h-100 px-5" >
            <div className="row ">
                <div className="col-md-12">
                    <p className="communication-header text-center py-4">Comments</p>
                </div>
            </div>
            <div className="row h-50 d-block">
                {this.getComments()}
            </div>
            <div className="row ">
                <textarea className="communication-textarea mb-5 w-100 p-3" placeholder="Write your message here..."></textarea>
                <button className="communication-button-approve w-100">Approve</button>
            </div>
        </div>
    };
}
