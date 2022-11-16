import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Photo from'./Photo'


const Advert = ({ createdAt ,name, sale, price,tags,photo}) => {
    return (
      <article className="advert bordered">
        <div className="left">
          <Photo className="advert-photo" photo={photo} />
        </div>
        <div className="right">
          <div className="advert-header">
            <span className="advert-name">nombre: {name}</span><br/>            <span className="advert-username">{
                sale ? 'to buy ' : 'sell'
            }</span>
            <br/>
            <span className="advert-separator">price: {price}</span><br/>
            <span>tags: {tags[0]}</span><br/>
            <time dateTime={createdAt}>{formatDistanceToNow(new Date())}</time>
          </div>
        </div>
      </article>
    );
  };
  
  export default Advert;
  