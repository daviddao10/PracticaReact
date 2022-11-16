import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getTweetDetail } from '../petitions/serviceAdverts.js';
import { relogin } from '../petitions/service'

import Page from '../common/Page.js';

const IdAdverts = props => {
  const [adverts, setAdverts] = useState(null);
  const { IdAdverts } = useParams();
  const navigate = useNavigate();
  const unmounteRef = useRef(false);
   console.log(IdAdverts)
  useEffect(() => {
    relogin()
    getTweetDetail(IdAdverts)
      .then(adverts => {
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
