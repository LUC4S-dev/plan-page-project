import styles from './Plans.module.css'

function Plans(props){

    // const prices = [10,20,30];
    // const plans = ["Free","Básico", "Profissional"];

    return(
        <section className={styles.plans_container}>
            
            <div className={styles.plans}>
                <div className={styles.plans_name_header}>
                    <div className={styles.plans_name}>{props.plan1}</div>
                </div> 
            </div>

           
            <div className={styles.plans_main}>
               
                <div className={styles.plans_name_header}>
                    <div className={styles.plans_name}>{props.plan2} </div>
                </div>
                    
                    <div className={styles.plans_price_main}>R${props.price2}<span>/mês</span></div>
                    <div className={styles.plans_description}>Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
                    <hr></hr>

                    <ul>
                        <li>
                        Lorem Ipsum is simply dummy text.
                        </li>
                        <li>
                        Lorem Ipsum is simply dummy text.
                        </li>
                        <li>
                        Lorem Ipsum is simply dummy text.
                        </li>
                    </ul>

                    <div className={styles.plans_button}><button>adawdaw</button></div>
            </div>
           
            <div className={styles.plans}>
                <div className={styles.plans_name_header}>
                    <div className={styles.plans_name}>{props.plan3}</div>
                </div> 
            </div>
            
        </section>

    )

}

export default Plans;