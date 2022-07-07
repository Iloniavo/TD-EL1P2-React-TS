import React, { useState } from 'react';
import logo from './logo.svg';
import './style.css';
import './App.css';
import { resolveModuleNameFromCache } from 'typescript';

let toDoTab : { id : number , titre : string , descri : string}[] = [];
let doingTab : { id : number , titre : string , descri : string}[] = [];
let doneTab : { id : number , titre : string , descri : string}[] = [];

const Card : React.FC<any> = ({children}) => {
  return (
    <div >
   {children}
    </div>
  )
}




function App() {
  
  const [ title , setTitle ] = useState<string> ("");
  const [ descrip , setDescri ] = useState<string>("");
  const [ todo , setToDoTab ] = useState(toDoTab);
  const [ doing , setDoingTab ] = useState(doingTab);
  const [ done , setDoneTab ] = useState(doneTab);
  const [ id , setId ] = useState(0) ;
  
  const addToDo = () : void => {
    setId(id + 1);
    if (title === "" || descrip ==="") {
      alert("Please check your input")
    }
    else{
      toDoTab.push({ id: id,  titre : title,
        descri : descrip})
       setToDoTab(toDoTab) ;
        console.log(toDoTab)
    }
  }

  const addDoing = () : void => {
    setId(id + 1);
    if (title === "" || descrip ==="") {
      alert("Please check your input")
    }
    else{
      doingTab.push({ id: id,  titre : title,
        descri : descrip})
       setDoingTab(doingTab) ;
    
       console.log(doingTab)
    }
  }

  const addDone = () : void => {
    setId(id + 1);
    if (title === "" || descrip ==="") {
      alert("Please check your input")
      window.location.reload()
    }
    else{
      doneTab.push({ id: id,  titre : title,
        descri : descrip})
       setDoneTab(doneTab) ;
    
       console.log(doneTab)
    }
  }
  
 

  const removeToDo = (item: any) : void => {
    toDoTab.splice(item.id, item.id)
    setToDoTab(toDoTab)
  }
  
  

  return (
    <div className="App">

       <div className='inputForm'>
            <form>
            <div className="mb-3">
  
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='Title' value = {title} onChange={
    (e) => {setTitle(e.target.value)}
  }/>
</div>
<div className="mb-3">
 
  <input className="form-control" placeholder='Description' value={descrip} onChange={
    (e) => { setDescri(e.target.value)} 
  } id="exampleFormControlTextarea1" />
</div>  
<button type="button" className="btn btn-primary" onClick={addToDo}>To do</button>
<button type="button" className="btn btn-secondary"  onClick={addDoing}>Doing</button>
<button type="button" className="btn btn-success"  onClick={addDone}>Done</button>
            </form>
</div>  

  <div className='container'>
    <div className='column' id='1'> 
    <h2>TO DO</h2>
    { toDoTab.map( item  => (
  <Card key={item.id}> 
    <div className="card"  >
     <div className="card-body">
     <h5 className="card-title">{item.titre}</h5>
     <p className="card-text">{item.descri}</p>
 </div>
</div>
  </Card>
  ))}
    </div>
    <div className='column' id='2' >
      <h2>DOING</h2>
    { doingTab.map( item  => (
  <Card > 
    <div className="card" onClick={()=>{
      alert(" You're going to switch this card into 'DONE'")
      doneTab.push(item) 
      doingTab.splice(item.id, 1)
      setDoneTab(doneTab);
      setDoingTab(doingTab)
      
    }} >
     <div className="card-body" key={item.id}>
     <h5 className="card-title">{item.titre}</h5>
     <p className="card-text">{item.descri}</p>
 </div>
</div>
  </Card>
  ))}
    </div>
    <div className='column' id='3'>
      <h2>DONE</h2>
    { doneTab.map( item  => (
  <Card key={item.id}> 
    <div className="card"  >
     <div className="card-body">
     <h5 className="card-title">{item.titre}</h5>
     <p className="card-text">{item.descri}</p>
 </div>
</div>
  </Card>
  ))}
    </div>
  </div>

</div>
   );
}

export default App;


