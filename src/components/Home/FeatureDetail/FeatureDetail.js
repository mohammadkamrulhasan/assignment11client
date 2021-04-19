import React from 'react';

const FeatureDetail = ({feature}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '300px',width:'300px'}} src={feature.img} alt="" />
            <h5 className="mt-3 mb-3 ">{feature.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default FeatureDetail;