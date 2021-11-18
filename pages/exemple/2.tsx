import type { NextPage } from 'next'
import styles from '/styles/Home.module.css'

const Exemplu2: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={` ${styles.potato} ${styles.oof}`}>
      <h2 className={styles.h2}>Multiplu - Infoarena</h2>
        <br />
        <p>

        <h3 className={styles.h2}><span className={styles.left}>Input</span> <span className={styles.right}>Output</span></h3>
        <br/>
          <span className={`${styles.mono} ${styles.left}`}>
          7 13
          </span>

          <span className={`${styles.mono} ${styles.right}`}>
              1001
          </span>
          <br/>
        </p>
        <br />
      </div>
    </div>
  )
}

export default Exemplu2
