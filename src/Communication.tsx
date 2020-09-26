import React from 'react';
import './App.css';
import { Comment, db } from './App'

interface Props {
    comments: Comment[]
}

let comment: string;

let current_user: number = 0;

export default class ActionBar extends React.Component<Props> {

    getComments() {
        return this.props.comments.map(comment =>
            <div className="mb-3">
                <p className="communication-comment-user my-0">
                    {comment.user_id}
                </p>
                <p className="communication-comment-body my-0">
                    {comment.body}
                </p>
            </div>
        )
    }


    submitComment(e: any) {
        e.preventDefault();
        console.log(comment);
        db.collection('comments').add({
            body: comment,
            time_posted: new Date().getTime(),
            user_id: current_user++ % 2 === 0 ? "Mock Designer" : "Mock Dev"
        });


    }



    render() {
        return <div className=" bg-white h-100 px-5" >
            <div className="row ">
                <div className="col-md-12">
                    <p className="communication-header text-center py-4">Comments</p>
                </div>
            </div>
            <div className="row communication-chat d-block">
                {this.getComments()}
            </div>
            <div className="row ">
                <form className="w-100" onSubmit={this.submitComment}>
                    <input
                        className="communication-input mb-5 w-100 p-3"
                        placeholder="Write your message here..."
                        onChange={(e) => comment = e.target.value}
                    />
                </form>


                <button className="communication-button-approve w-100">Approve</button>
            </div>
        </div>
    };
}
