import React from 'react';
import plamber from '../../../Image/service1.jpg';
import electician from '../../../Image/service2.jpg';
import painter from '../../../Image/service3.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'Plumbing',
        img: plamber
    },
    {
        name: 'Electrical',
        img: electician
    },
    {
        name: 'Painting',
        img: painter
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;