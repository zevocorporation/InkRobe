import React,{useEffect} from 'react';
import  Aos from 'aos'
import 'aos/dist/aos.css'

import Quote from '../img/Quote.svg'

function Review(props) {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const renderReview = props.data.map(review =>
        <div data-aos="fade-up" key={review.id} className="Review">
            <img  src={Quote} />
            <p >" {review.review} "</p>
            <h3 >{review.name}</h3>
            <p >{review.designation}</p>
            <b >{review.company}</b>
        </div>
    )

    return (
        renderReview
    );
}

export default Review;
