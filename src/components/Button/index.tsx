import styles from './styles.module.scss';

interface ButtonProps {
    image: string
    answer: string
}

export function Button(props: ButtonProps) {

    function handleSendAnswer() {
        console.log(props.answer)
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={ styles.button } src={ props.image } alt="" onClick={()=> handleSendAnswer()}/>
            </div>
        </div>
    )
}