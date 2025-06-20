import React from 'react';
import './Card2.css';


const Card2 = ({ data }) => {
  console.log(data);


  return (
   <div className="div">
    <div className='cardContaine'>
      {data.map((curItem, index) => {
        if(!curItem.urlToImage){
          return null;
        }
        else{

          return (
            <div className="card" style={{ width: '30rem' }} key={index}>
              <img src={curItem.urlToImage} className="card-img-top" alt={curItem.title} />
              <div className="card-body">
                <h5 className="card-title">{curItem.title}</h5>
                <p className="card-text">{curItem.description}</p>
                <a href={curItem.url} className="btn btn-primary">Go somewhere</a>
       
              </div>
            </div>
          );
        }
    
      })}
      </div>
      </div>
   
  );
};

export default Card2;