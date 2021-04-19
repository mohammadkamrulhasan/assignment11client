import React from 'react';
import projectImage from '../../Image/professional1.jpg';

const Project = () => {
    return (
       
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Our Delivered Project</h1>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi mollitia magni maiores, nulla consectetur optio iste culpa? Unde quis neque iusto, voluptatum maiores animi est sint voluptate nihil commodi amet! Dolorum delectus recusandae id saepe nesciunt error? Suscipit praesentium nulla, cum porro cumque laboriosam. Sed repellendus eos laborum nam error quis maxime aliquid animi, quibusdam nesciunt in ipsam ad voluptas consequuntur quaerat perspiciatis, repellat illo enim quasi explicabo. Vel, at.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="col-md-5">
                <img src={projectImage} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default Project;