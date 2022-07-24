
import Modal from 'react-modal';
import { Button } from "../Button";
import styles from './styles.module.scss'

export function Survey() {
    return(
    <div className={ styles.container }>
        <h1>Como você avalia nosso atendimento?</h1>
        <div className={ styles.content }>
            <Button 
            image="./insatisfeito.svg" 
            answer="insatisfeito"
            />

            <Button 
            image="./neutro.svg" 
            answer="neutro"
            />

            <Button 
            image="./satisfeito.svg" 
            answer="satisfeito"
            />
        </div>
    </div>
    )
}