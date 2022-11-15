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
            <span className="advert-name">{name}</span>
            <span className="advert-username">{
                sale ? 'to buy' : 'sell'
            }</span>

            <span className="advert-separator">price: {price}</span>
            <span>tags: {tags[0]}</span>
            <time dateTime={createdAt}>{formatDistanceToNow(new Date())}</time>
          </div>
        </div>
      </article>
    );
  };
  
  export default Advert;
  