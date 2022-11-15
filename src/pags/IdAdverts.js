import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getTweetDetail } from '../petitions/serviceAdverts.js';

const IdAdverts = props => {
  const [adverts, setAdverts] = useState(null);
  const { IdAdverts } = useParams();
  const navigate = useNavigate();
  const unmounteRef = useRef(false);

  useEffect(() => {
    console.log('1')
    getTweetDetail(IdAdverts)
      .then(adverts => {
        console.log('have response');
        // if (unmounteRef.current) {
        //   console.log('do nothing');
        //   return;
        // }
        console.log('set state');
        setAdverts(adverts);
      })
      .catch(error => {
        if (error.status === 404) {
          navigate('404');
        }
      });
  }, [IdAdverts, navigate]);

  useEffect(() => {
    return () => {
      unmounteRef.current = true;
    };
  }, []);

  return (
    <Page title="Tweet detail" {...props}>
      <div>{JSON.stringify(adverts)}</div>
    </Page>
  );
};

export default IdAdverts;
