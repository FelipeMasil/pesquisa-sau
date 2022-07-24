import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

import Modal from 'react-modal';

interface ButtonProps {
    answer: string,
    image: string
}

export function Button(props: ButtonProps) {
    const [ answer, setAnswer ] = useState("");
    const [ count, setCount ] = useState(0);
    const [ modalIsOpen, setIsOpen ] = useState(false)


    //Modal.setAppElement('#root');

    async function openModal(){
        await setTimeout(()=>{
            setIsOpen(false)
        } , 5000)

        setIsOpen(true)
    }


    useEffect(function(){
        axios.post('http://localhost:3000/api/answer', {answer: answer} )
    }, [count])
    
    
    return(
        
        <>
        <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        >
            <div className={styles.modalContent}>
                <h1>Muito Obrigado, sua opinião é muito importante para nós!</h1>
            </div>
        </Modal>

        <div className={styles.container}>
            <div className={styles.content}>
                <img 
                className={ styles.button } 
                src={ props.image } 
                onClick= {async()=> {
                    await setAnswer(props.answer)
                    await setCount(count + 1)
                    openModal()                   
                } }
                />
            </div>
        </div>
        </>
    )
}