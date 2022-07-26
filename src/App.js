import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import Eventlist from './components/Eventlist';
import EventForm from './components/EventForm';

function App() {
  const [showevent,setShowevent]=useState(true);
  const [showmodal,setShowmodal]=useState(false);

  const [events,setEvents]=useState([
    {
      title:'Demo',date:'22-08-2020',location:'bhubaneswar'
    }
  ]);
  
  const addEvent=(e)=>{
    setEvents((prevEvent)=>{
      return ([...prevEvent,e]);
    })
  }
  const handleDelete=(id)=>{
    setEvents(events.filter((event)=>{
      return id!=event.id;
    }))
  }
  const handleClose=()=>{
    setShowmodal(false);
  }
  

  return (
    
    <div className="App">
      <Title headLine='Events To Attend' subTitle='#Satya Ranjan Roy' name=''/>
      
      {!showevent &&
      <>
        <button onClick={()=>setShowevent(true)}><b>Show Events</b></button>
      </>
      }
      
      {showevent && 
      <>
        <button onClick={()=>setShowevent(false)}><b>Hide Events</b></button>
      </>
      }
        { showevent && <Eventlist events={events} handleDelete={handleDelete}/>}
        
      {showmodal && <Modal handleClose={handleClose} isActive={true}> 
        <EventForm  addEvent={addEvent} setShowmodal={setShowmodal}/>
        </Modal>}
        {!showmodal&&
          <div><button onClick={()=>setShowmodal(true)}>Add Event</button></div>
        }
    </div>
    
  );
}

export default App;
