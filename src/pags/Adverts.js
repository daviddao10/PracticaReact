import { useEffect, useState,  } from 'react'
import { useNavigate,Link } from 'react-router-dom';

import { getLatestTweets } from '../petitions/serviceAdverts'
import Page from "../common/Page"
import Advert from '../common/advert.js'
import Button from '../common/Button'
import FormField from '../common/FormField'
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

    const [name, setName] = useState('')
    const [sale, setSale] = useState(Boolean)
    const [price, setPrice] = useState(Number)
    const [tags, setTags]  = useState('')
    const [filterTags, setFilterTags] = useState([])
    
    const borrarItemen= function (array,a) {
      for (var i = 0; i < array.length; i++) {
       if (array[i] == a) {
        for (var i2 = i; i2 < array.length - 1; i2++) {
         array[i2] = array[i2 + 1];
        }
        array.length = array.length - 1;
        return;
       }
      }
     };
     const tagsInFileter = (filterTags,tags) =>{
      filterTags.includes(tags) ? borrarItemen(filterTags,tags) : filterTags.push(tags)
      return filterTags
     }
     
    const handleName= event => setName(event.target.value)
    const handlePrice= event => setPrice(event.target.value)

   // useEffect(()=>{
     // setFilterTags(tagsInFileter(filterTags,tags))

    //},[setFilterTags,tagsInFileter,filterTags,tags])

    function a(){
      setFilterTags(tagsInFileter(filterTags,tags))
    }
    
  console.log(tags)
   console.log(filterTags)


    return(
        <Page title="Do you want to buy?" {...props}>
        <form>
          <h1>Filtros</h1>
          <FormField
          type="text"
          placeholder="The name"
          value={name}
          onChange={handleName}
          label='name'
          />
          <h2>Sale</h2>
          <input value={sale} type="radio" id="sale" name="sale" onChange={()=>{setSale('')}} />
          <label for="sale">Todo</label><br/>
          <input value={sale} type="radio" id="sale" name="sale" onChange={()=>{setSale(false)}} />
          <label for="sale">Buy</label><br/>
          <input value={sale} type="radio" id="sale" name="sale"  onChange={()=>{setSale(true)}}/>
          <label for="sale">Sell</label><br/>
          <h2>Tags</h2>
          <input value={tags} type="checkbox"  onChange={()=>{setTags("lifestyle")}} onClick={a} />
          <label for="tags">lifestyle</label><br/>
          <input value={tags} type="checkbox" onChange={()=>{setTags("mobile")}}/>
          <label for="tags">mobile</label><br/>
          <input value={tags} type="checkbox"  onChange={()=>{setTags("motor")}} />
          <label for="tags">motor</label><br/>
          <input value={tags} type="checkbox" onChange={()=>{setTags("work")}}/>
          <label for="tags">work</label><br/>
          <Button>Filter</Button>
          <Button>Reset</Button>
          |
        </form>
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
