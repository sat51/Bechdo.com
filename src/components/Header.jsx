import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../images/logo.png' 
import "../stylesheet/Header.css";  
import Fuse from 'fuse.js';


const Header = () => {
  const [search,setsearchTerm] = useState('');
  const products = JSON.parse(localStorage.getItem("data"))
  const fuse = new Fuse(products,{
    keys:[
      'name'
    ],
  });
  const showSearchResult = () =>{
    console.log(search);
    console.log(fuse.search(search));
  }
  return (
    <div className="Header_container ">
      <div className="Header_leftContainer ">
        <h1 className='Header_leftContainerLogo'>BECHDO</h1>
      </div>
      <div className="Header_centerContainer">
        <input type='text' placeholder='Find anything you need' className='Header__centerInputField' 
        onChange={(e)=>setsearchTerm(e.target.value)}
        />
        <SearchIcon className='Header__centerIcon' 
        onClick={showSearchResult}/>
      </div>
      <div className="Header_rightContainer">
         <h4 className='Header__rightLinkText'>Login</h4>
         <button className='Header__rightButton'>SELL</button>
      </div>
    </div>
  )
}

export default Header
