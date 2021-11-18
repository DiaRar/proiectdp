import type { NextPage } from 'next'
import styles from '/styles/Home.module.css'

const Exemplu2: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={` ${styles.potato} ${styles.oof}`}>
        <h2 className={styles.h2}>Multiplu - Infoarena</h2>
        <br />
        <p>
        <h3 className={styles.h2}>Input</h3>
          <br />
          <div className={styles.mono}>
              3 4
          </div>
          <h3 className={styles.h2}>Explicatie Cod</h3>
          <br />
          Pentru a calcula cel mai mic multiplu comun se foloseste formula:
          <br/>
          <div className={styles.mono}>[a, b] = a ⋅ b ÷ (a, b)</div>
          <br/>
          
        </p>
        <br />
       {/* <img className={styles.img} src="/graf.svg" ></img> */}
      </div>
    </div>
  )
}

export default Exemplu2
