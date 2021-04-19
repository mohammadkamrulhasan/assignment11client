import React from 'react';
import handyman from '../../../Image/Header1.jpg';
import openTime from '../../../Image/open.jpg';
import money from '../../../Image/money.jpg';
import FeatureDetail from '../FeatureDetail/FeatureDetail';

const featureData = [
    {
        name: 'Professional Handyman',
        img: handyman
    },
    {
        name: '24/7 Services',
        img: openTime
    },
    {
        name: 'Affordable Price',
        img: money
    }
]

const Feature = () => {
    return (
        <section className="features-container mt-5">
            <div className="text-center">
                <h2 style={{color: '#1CC7C1'}}>Our Features</h2>
                <h5>For better solution. Leave the building to the professionals.</h5>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    featureData.map(feature => <FeatureDetail feature={feature} key={feature.name}></FeatureDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Feature;