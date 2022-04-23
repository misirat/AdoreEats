import React from "react";
import dateFormat from "dateformat";

const LoadComments = props => {
    return (

        props.comments.map(item => {
            return (
                <div key={item.id}>
                    <h5>{item.author}</h5>
                    <p>{item.comment}</p>
                    <p>Rating: {item.rating} / 5</p>
                    <p>Commented on {dateFormat(item.date, 'dddd, mmmm dS. yyyy, h:MM TT')}</p>
                    <hr />
                </div>
            );

        })

    );
}

export default LoadComments;