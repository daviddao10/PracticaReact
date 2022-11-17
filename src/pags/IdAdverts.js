import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getTweetDetail } from '../petitions/serviceAdverts.js';
import { relogin } from '../petitions/service'

import Page from '../common/Page.js';
import AdvertDetail from '../common/detailAdverts.js';

const IdAdverts = props => {
  const [adverts, setAdverts] = useState(null);
  const { advertsId } = useParams();
  const navigate = useNavigate();
  const unmounteRef = useRef(false);

  useEffect(() => {
    relogin()
    getTweetDetail(advertsId)
      .then(adverts => {
        setAdverts(adverts);
      })
      .catch(error=>{
        if (error.status === 404) {
          navigate('404');
        }
      })
      
  }, [advertsId, navigate]);

  useEffect(() => {
    return () => {
      unmounteRef.current = true;
    };
  }, []);

  return (
    <Page title="Adverts detail" {...props}>
      <AdvertDetail {...adverts}/>
      
    </Page>
  );
};

export default IdAdverts;
