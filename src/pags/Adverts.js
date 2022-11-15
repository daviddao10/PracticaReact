import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../common/Header.js'
import { getLatestTweets } from '../petitions/serviceAdverts'
import Page from "../common/Page"
import Advert from '../common/advert.js'
import Button from '../common/Button'

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
      <p>Be the first one!</p>
      <Button as={Link} to="/tweets/new" variant="primary">
        Create Advert
      </Button>
    </div>
  );
  const useAdverts = () => {
    const [adverts, setAdverts] = useState([]);
  
    useEffect(() => {
      const execute = async () => {
        const adverts = await getLatestTweets();
        setAdverts(adverts);
      };
      execute();
      
    }, []);
    return adverts;
}

const Adverts = props =>{
    const adverts = useAdverts()
    return(
        <>
        <Header></Header>
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
        </>
    )
}

export default Adverts
