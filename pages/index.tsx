import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.potato}>
        <h2 className={styles.h2}>Multiplu - Infoarena</h2>
        <br />
        <p className={styles.textcont}>Se dau două numere naturale nenule <span className={styles.mono}>A</span> și <span className={styles.mono}>B</span>. Să se determine <span className={styles.mono}>M</span>, cel mai mic multiplu comun al celor două numere cu proprietatea că <span className={styles.mono}>M</span> este format doar din cifrele 1 și 0 în scrierea sa în baza 10.
        </p>
        <br />
        <p>
          <h3 className={styles.h2}>Date de intrare</h3>
          <br />
          În fișierul de intrare se dau pe prima linie, desparțite de un spațiu, numerele <span className={styles.mono}>A</span> și <span className={styles.mono}>B</span>.
        </p>
        <br />
        <p>
          <h3 className={styles.h2}> Date de ieșire</h3>
          <br />
          În fișierul de ieșire se va scrie numărul <span className={styles.mono}>M</span> cu semnificația din cerința.
        </p>
        <br />
        <h3 className={styles.h2}>Restrictii</h3>
        <br />
        <span className={styles.mono}>1 ≤ A ⋅ B ≤ 2 ⋅ 10<sup>6</sup></span>

        
      </div>
    </div>
  )
}

export default Home
