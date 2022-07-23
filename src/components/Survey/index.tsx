import { Button } from "../Button";

import styles from './styles.module.scss'

export function Survey() {
    return(
    <div className={ styles.container }>
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