import { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

import { getLatestTweets } from '../petitions/serviceAdverts'
import Page from "../common/Page"
import Advert from '../common/advert.js'
import Button from '../common/Button'
import { relogin } from '../petitions/service'

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
      <p>Be the first one!</p>
      <Button as={Link} to="/tweets/new" variant="primary">
        Create Advert
      </Button>
    </div>
  );
  const useAdverts = () => {
    const navigate = useNavigate();
    const [adverts, setAdverts] = useState([]);
  
    useEffect(() => {
      const execute = async () => {
        try {
          await relogin()
          const adverts = await getLatestTweets();
          setAdverts(adverts);
          
        } catch (error) {
          
          if (error.message==='Unauthorized') {
            navigate("/login")
          }
        }
        
      };
      execute();
      
    }, []);
    return adverts;
}

const Adverts = props =>{
    const adverts = useAdverts()
    return(
      
        
        <Page title="Do you want to buy?" {...props}>
            <div>
        {adverts.length ? (
          <ul>
            {adverts.map(adverts => (
              <li key={adverts.id}>
                <Link to={`/adverts/${adverts.id}`}>
                  <Advert {...adverts} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
        </Page>
      
    )
}

export default Adverts
