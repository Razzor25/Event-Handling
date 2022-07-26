import './Title.css';
export default function Title(props){
return(
    <div className='title-block'>
        <h1 className="titleHead">{props.headLine}</h1>
        <br />
        <h2 className="titleSubHead">{props.subTitle}</h2>
        <h1>Welcome {props.name}</h1> 
    </div>
);
}
//React Fragments <> </> works like a wrapping element but it wont show in the console developer settings of chrome!