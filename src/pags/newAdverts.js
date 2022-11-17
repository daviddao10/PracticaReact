import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Page from "../common/Page"
import Button from "../common/Button";
import FormField from "../common/FormField";

import { relogin } from '../petitions/service'
import { createTweet } from '../petitions/serviceAdverts'

const NewAdverts = () =>{
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [sale, setSale] = useState(Boolean)
    const [price, setPrice] = useState(Number)
    const [tags, setTags]  = useState('')
    const [img, setImg] = useState('')
    
    const handleName= event => setName(event.target.value)
    const handlePrice= event => setPrice(event.target.value)
    const handleImg= event => setImg(event.target.value)

    const datos = {
        name: name,
        sale: sale,
        price: price,
        tags: [tags],
      }
    
    const submit = async event=>{
        event.preventDefault();
        try{
            relogin()
            console.log(datos)
            const crearAdverts = await createTweet(datos)
            navigate(`/adverts/${crearAdverts.id}`);
        } catch (error){
            console.log(error)
            if (error.status === 401) {
                navigate('/login');
              }
              if (error.message==='Unauthorized') {
                navigate("/login")
              }
        }
    }
 
   return( 
<Page>
    <form onSubmit={submit}>
        <h1>New adverts</h1>
        
        <FormField
        type="text"
        placeholder="The name"
        value={name}
        onChange={handleName}
        label='name'
        />
        <FormField
        type="number"
        placeholder="The price "
        value={price}
        onChange={handlePrice}
        label='The price'
        />
        <FormField
        type="text"
        placeholder="The imagen in url "
        value={img}
        onChange={handleImg}
        label='The imagen'
        />

        <h2>Sale</h2>
        <input value={sale} type="radio" id="sale" name="sale" onChange={()=>{setSale(false)}} />
        <label for="sale">Buy</label><br/>
        <input value={sale} type="radio" id="sale" name="sale"  onChange={()=>{setSale(true)}}/>
        <label for="sale">Sell</label><br/>

        <h2>Tags</h2>
        <input value={tags} type="radio" id="tags" name="tags" onChange={()=>{setTags("lifestyle")}} />
        <label for="tags">lifestyle</label><br/>
        <input value={tags} type="radio" id="tags" name="tags"  onChange={()=>{setTags("mobile")}}/>
        <label for="tags">mobile</label><br/>
        <input value={tags} type="radio" id="tags" name="tags" onChange={()=>{setTags("motor")}} />
        <label for="tags">motor</label><br/>
        <input value={tags} type="radio" id="tags" name="tags"  onChange={()=>{setTags("work")}}/>
        <label for="tags">work</label><br/>

        <Button
        type="submit"
        >Post
        </Button>
    </form>
</Page>)

}
export default NewAdverts;