import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Explicatie: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={` ${styles.potato} ${styles.oof}`}>
        <h2 className={styles.h2}>Multiplu - Infoarena</h2>
        <br />
        <p>
        <h3 className={styles.h2}>Explicatie Algoritm</h3>
          <br />
          <span className={styles.mono}>M</span> este un multiplu al numerelor <span className={styles.mono}>A</span> si <span className={styles.mono}>B</span>, deci va fi divizibil cu cel mai mic multiplu comun <span className={styles.mono}>[A, B] = n</span>. Astfel problema se rezuma la a gasi cel mai mic numar format din cifrele 0 si 1 cu proprietatea ca acesta este divizibil cu <span className={styles.mono}>n</span>. Generalizand, problema consta in gasirea celui mai mic numar x cu proprietatea <span className={styles.mono}>x ≡ k1 (mod k2)</span>, format din cifre apartinand unei multimi. Putem reprezenta numerele formate din aceste cifre in ordine crescatoare sub forma unui graf unde exista muchie intre <span className={styles.mono}>u</span> in <span className={styles.mono}>v</span> daca <span className={styles.mono}>n<sub>v</sub> = n<sub>u</sub> ⋅ 10 + c</span>, unde <span className={styles.mono}>c</span> apartine multimii cifrelor. In consecinta, acest graf va fi format din <span className={styles.mono}>k</span> arbori, unde <span className={styles.mono}>k</span> reprezinta cardinalul multimii cifrelor nenule. Astfel, in cazul problemei particulare (multimea cifrelor este <span className={styles.mono}>{"{"}0, 1{"}"}</span>, <span className={styles.mono}>k1 = 0</span> si <span className={styles.mono}>k2 = n</span>), graful va fi un arbore binar a carui radacina o vom considera nodul reprezentat numarului 1 (format doar din cifra 1). Pentru gasirea celui mai mic multiplu al lui <span className={styles.mono}>n</span> in arbore, vom parcurge graful in ordinea distantei fata de radacina, vizitand copiii in ordinea crescatoare a numerelor reprezentate de acestia si marcand nodurile vizitate in functie de restul obtinut prin impartirea la <span className={styles.mono}>n</span> pentru a nu vizita un numar mai mare (gasit mai tarziu) cu acelasi rest. Parcurgerea se termina cand gasim nodul al carui numar reprezentant se divide cu <span className={styles.mono}>n</span>.
        <br/>
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

export default Explicatie
