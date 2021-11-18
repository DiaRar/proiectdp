import type { NextPage } from 'next'
import styles from '/styles/Home.module.css'

const Exemplu1: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={` ${styles.potato} `}>
        <h2 className={styles.h2}>Multiplu - Infoarena</h2>
        <br />
        <p>

        <h3 className={styles.h2}><span className={styles.left}>Input</span> <span className={styles.right}>Output</span></h3>
        <br/>
          <span className={`${styles.mono} ${styles.left}`}>
              3 4
          </span>

          <span className={`${styles.mono} ${styles.right}`}>
              11100
          </span>
          <br/>
          <h3 className={styles.h2}>Graf</h3>
          <br/>
        </p>
        <br />
       <img className={styles.img} src="/graf.svg" ></img>
      </div>
    </div>
  )
}

export default Exemplu1
