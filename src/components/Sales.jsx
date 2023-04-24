import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "../stylesheet/Sales.css"

const Sales = () => {
    const [mounted,setMounted] = useState(false);
    const [product,setProducts] = useState([])

    useEffect(async()=>{
        
            const {data}= await axios.get('http://localhost:5000/api/products');

            if(mounted){
                setProducts(data);
                localStorage.setItem("data",JSON.stringify(data));
            }
        

       
        return() =>{
            setMounted(false)
        }
    },[mounted])
    console.log(product);
  return (
    <div className='Products__container'>
      {
        product && <div className="Products">
            {
                product.map(item => {
                    return <div className="Item">
                        <img src="{item.image}" alt="" />
                        <h4>{item.name}</h4>
                        <h3>{`Owner:${item.owner}`}</h3>
                    </div>
                })
            }
        </div>
      }
    </div>
  )
}

export default Sales;
