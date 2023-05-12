import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.header_container}>
            <section className={styles.header_title}>
                <h1> Conheça nossos planos</h1>
                <br/>
                <p>Conheça nossas soluções e escolha o plano ideal para o seu <br/>
                próximo projeto.</p>
            </section>
        </div>
    )
}

export default Header