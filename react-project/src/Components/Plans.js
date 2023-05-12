import styles from './Plans.module.css'

function Plans(props){

    return(
        <section className={styles.plans_container}>
            
            <div className={styles.plans}>
                <div>{props.plan1}</div>
            </div>
           
            <div className={styles.plans}>
                 <div>{props.plan2}</div>
            </div>
           
            <div className={styles.plans}>
                 <div>{props.plan3}</div>
            </div>

        </section>

    )

}

export default Plans;