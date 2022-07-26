import { useState , useRef} from 'react';
import './EventForm.css';

export default function EventForm(props){
    const [title,setTitle]=useState("");
    const [date,setDate]=useState("");
    const location=useRef();
    const handleReset=()=>{
        setDate('');
        setTitle('');
        location.current.value="bangalore";
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const event={
            title:title,
            date:date,
            id:new Date().getTime(),
            location:location.current.value
        }
        console.log(event);
        props.addEvent(event);
        props.setShowmodal(false);

    }

    const [startDate, setStartDate] = useState(new Date());  


    return(
        <form className="event-form" onSubmit={handleSubmit}>
            <button>Submit</button>

            <label>
                <span>Title: </span>
                <input type="text" 
                placeholder="Enter The Title"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                required></input>
            </label>


            <label>
                <span>Date: </span>
                <input type="date"
                min="1920-01-01"
                max="2029-12-31"
                placeholder="Enter The Title"
                onChange={(e)=>setDate(e.target.value)}
                value={date}
                required></input>
            </label>
            
            <label>
                <span>Location: </span>
                <select ref={location}>
                    <option value={"bangalore"}>Bangalore</option>
                    <option value={"bhubaneswar"}>Bhubaneswar</option>
                    <option value={"chennai"}>Chennai</option>
                    <option value={"delhi"}>Delhi</option>
                    <option value={"gujrat"}>Gujrat</option>
                    <option value={"hyderabad"}>Hyderabad</option>
                    <option value={"kolkata"}>Kolkata</option>
                    <option value={"mumbai"}>Mumbai</option>     
                    <option value={"others"}>Other.</option>     
                </select>
            </label>

            
            <p style={{cursor:'pointer'}} onClick={handleReset}>Reset</p>

            
        </form>
    )
}