import React from 'react';
import './EventList.css';
export default function EventListener(props){
    return(
        <>
        {props.events.map((event, index)=>(
            <div className={"events"} key={event.id}>
              <h2>{event.title}</h2>
              <p>{event.location} - <em>{event.date}</em></p>
              <button onClick={()=>props.handleDelete(event.id)}>Delete</button>
            </div>
          ))}
        </>
    );
}