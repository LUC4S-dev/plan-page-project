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
                <div className={styles.plans_price}>R${props.price1}</div>
            </div>

           
            <div className={styles.plans_main}>
                <div className={styles.plans_name_header}>
                    <div className={styles.plans_name}>{props.plan2} </div>
                    <div><button className={styles.plans_name_button}>Popular</button></div>
                </div>
                <div className={styles.plans_price}>R${props.price2}</div>

            </div>
           
            <div className={styles.plans}>
                <div className={styles.plans_name_header}>
                    <div className={styles.plans_name}>{props.plan3}</div>
                </div> 
                <div className={styles.plans_price}>R${props.price3}</div>
            </div>

        </section>

    )

}

export default Plans;