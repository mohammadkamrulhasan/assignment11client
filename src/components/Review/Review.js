import React from 'react';
import david from '../../Image/davidMumma.png';
import etty from '../../Image/ettyFidele.png';
import gregory from '../../Image/gregoryHayes.png';
import ReviewDetail from '../Home/Home/ReviewDetail/ReviewDetail';
import './Review.css';


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'David Mumma',
        from : 'California',
        img : david
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Etty Fidele',
        from : 'California',
        img : etty
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Gregory Hayes',
        from : 'California',
        img : gregory
    }
]

const Review = () => {
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Client <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <ReviewDetail testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Review;