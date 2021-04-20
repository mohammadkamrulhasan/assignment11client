import React from 'react';
import AboutusImage from '../../Image/AboutUs.jpg';

const AboutUs = () => {
    return (
        <div>      
                     
           
         <div className="col-md-12 shadow p-5 ">
          <div className="form-group">
          <h3> Please contact with us <br/> for your handyman service:</h3>
          </div>
          <div className="form-group text-success">
          <h3>Our Address:</h3>
          </div>
          <div className="form-group">
          <p>Mohammadpur, Dhaka-1207</p>
            <p>Bangladesh</p>
          </div>
          <div className="from-group mt-5 text-primary">
          <h3>Our Cell Number:</h3>
            <p>01711111111</p>
          </div>
        </div>          
        </div>
    );
};

export default AboutUs;