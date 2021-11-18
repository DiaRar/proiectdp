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
        <h3 className={styles.h2}>Explicație</h3>
          <br />
          <span className={styles.mono}>M</span> este un multiplu al numerelor <span className={styles.mono}>A</span> si <span className={styles.mono}>B</span>, deci va fi divizibil cu cel mai mic multiplu comun <span className={styles.mono}>[A, B] = n</span>. Astfel problema se rezuma la a gasi cel mai mic numar format din cifrele 0 și 1 cu proprietatea că acesta este divizibil cu <span className={styles.mono}>n</span>. Generalizând, problema constă în găsirea celui mai mic numar x cu proprietatea <span className={styles.mono}>x ≡ k1 (mod k2)</span>, format din cifre aparținand unei mulțimi. Putem reprezenta numerele formate din aceste cifre în ordine crescătoare sub forma unui graf unde există muchie între <span className={styles.mono}>u</span> în <span className={styles.mono}>v</span> dacă <span className={styles.mono}>n<sub>v</sub> = n<sub>u</sub> ⋅ 10 + c</span>, unde <span className={styles.mono}>c</span> aparține mulțimii cifrelor. În consecința, acest graf va fi format din <span className={styles.mono}>k</span> arbori, unde <span className={styles.mono}>k</span> reprezintă cardinalul mulțimii cifrelor nenule. Astfel, în cazul problemei particulare (mulțimea cifrelor este <span className={styles.mono}>{"{"}0, 1{"}"}</span>, <span className={styles.mono}>k1 = 0</span> și <span className={styles.mono}>k2 = n</span>), graful va fi un arbore binar a cărui rădăcina o vom considera nodul reprezentat numărului 1 (format doar din cifra 1). Pentru găsirea celui mai mic multiplu al lui <span className={styles.mono}>n</span> in arbore, vom parcurge graful în ordinea distantei fața de radăcină, vizitând copiii în ordinea crescătoare a numerelor reprezentate de aceștia și marcând nodurile vizitate în funcție de restul obținut prin împărtirea la <span className={styles.mono}>n</span> pentru a nu vizita un număr mai mare (găsit mai târziu) cu același rest. Parcurgerea se termină când găsim nodul al cărui număr reprezentant se divide cu <span className={styles.mono}>n</span>.
          <br />
          <br />
          <div className={styles.h2}></div>
          <br />
          Deoarece soluțiile parțiale pot să aibă foarte multe cifre, acestea nu pot fi memorate direct, ci trebuie utilizat un algoritm pentru reconstrucția soluției. În acest scop, memorăm ultima cifră a numerelor simbolice unui rest (modulo <span className={styles.mono}>n</span>) (pentru <span className={styles.mono}>n<sub>u</sub> ≡ i (mod n)</span>, <span className={styles.mono}>digit[i] = n<sub>u</sub> % 10</span>) și restul numărului reprezentat de nodul tată la împărtirea cu <span className={styles.mono}>n</span> (<span className={styles.mono}>prev_mod[rest<sub>n<sub>fiu</sub></sub>] = rest<sub>n<sub>tată</sub></sub></span>). Cu aceste date reținute, reconstrucția se face prin parcurgerea vectorului de cifre (<span className={styles.mono}>digit[]</span>), începand pe poziția 0 (care reprezintă ultima cifră a soluției), unde indicele următor se obține prin <span className={styles.mono}>i<sub>nou</sub> = prev_mod[i]</span>. Astfel se obține vectorul cifrelor soluției în ordine inversă care este parcurs în ordine inversă pentru afișare.
        <br/>
        </p>
        <br />
       {/* <img className={styles.img} src="/graf.svg" ></img> */}
      </div>
    </div>
  )
}

export default Explicatie
