import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
export default function modal(props){
    return ReactDOM.createPortal((
        <div className={styles.modalPop}>
            <div className={styles.modalInfo} style={{
                border:"5px solid",
                borderColor: props.isActive ?'indigo' :'darkViolet',
                textAlign:'center'}}>

                {props.children}

                
                <div>
                <button 
                className={styles.btn} 
                onClick={()=>props.handleClose()}
                >Close[X]</button>
                </div>
            </div>
        </div>
    ), document.querySelector("#root"))// you can do document.body to get it outside all tags near the end body tag
}

