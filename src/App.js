import react , {useState  } from 'react';
import './App.css';


function App() {
  

  const [addCity,setCity]=useState("")


  const handleSubmit = (event) =>{
    event.preventDefault()
    setCity("")
    console.log(addCity);
    
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        

      <input type="text" name='addCity' placeholder="Enter city name" value={addCity} onChange={(e) => setCity(e.target.value)}/>
      <button>Add City</button>
      <div className= "label">
        
       <label>kollam</label><br></br>
       <label>trivandrum</label><br></br>
       <label>pathanamthitta</label>
      </div>
      
      </form>
    </div>

  
  );
}


export default App;
