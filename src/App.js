import React,{useEffect, useState} from 'react'
import ShowList from './ShowList';
import './App.css'


const App = () => {

  const [show, setShow] = useState([]);

   const getData = async () => {
    await fetch("http://api.tvmaze.com/search/shows?q=all")
      .then((resp) => resp.json())
      .then((res) => {
        setShow(res);
      });
  };
 
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <h3 className='heading'>Shows List</h3>
    <div className="show-container">
    {
      show.map((data)=>{
        return(
          <ShowList key={data.show.id} {...data}/>       
           );
       
      })
    }
    </div> 
    
    
   
    
    </>
  )
}

export default App
