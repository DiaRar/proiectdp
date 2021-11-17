import React from 'react';
import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'
import Head from 'next/head';

export default class sidebar extends React.Component {
    componentDidMount () {
        let arrow = document.getElementById("exemple");
        arrow?.addEventListener("click", ()=>{
            let arrowParent = arrow?.parentElement?.parentElement;//selecting main parent of arrow
             arrowParent?.classList.toggle(styles.showMenu);
          });
   
  let sidebar = document.getElementById("sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn?.addEventListener("click", ()=>{
    sidebar?.classList.toggle(styles.close);
  });
    }
    render() {
    return (
        <>
        <Head>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/go-mono" type="text/css"/>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css"/>
        {/* <link rel="stylesheet" href="https://unpkg.com/browse/@highlightjs/cdn-assets@11.3.1/styles/github.min.css"/> */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
        </Head>
          <div id="sidebar" className={`${styles.sidebar} ${styles.close}`}>
    <div className={`${styles["logo-details"]}`}>
      <i className="bx bxl-c-plus-plus bx-menu"></i>
      <span className={`${styles.logo_name}`}>Multiplu</span>
    </div>
    <ul className={`${styles["nav-links"]}`}>
      <li>
        <a href="#">
          <i className="bx bx-grid-alt" ></i>
          <span className={`${styles.link_name}`}>Cerinta</span>
        </a>
        <ul className={`${styles["sub-menu"]} ${styles.blank}`}>
          <li><a className={`${styles.link_name}`} href="#">Cerinta</a></li>
        </ul>
      </li>
      <li>
      <Link href="/code">
        <a href="#">
          <i className="bx bx-code-alt" ></i>
          <span className={`${styles.link_name}`}>Cod C++</span>
        </a>
        </Link>
        <ul className={`${styles["sub-menu"]} ${styles.blank}`}>
          <li>
            <Link href="/code">
            <a className={`${styles.link_name}`}>Cod C++</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-image-alt" ></i>
          <span className={`${styles.link_name}`}>Explicatie</span>
        </a>
        <ul className={`${styles["sub-menu"]} ${styles.blank}`}>
          <li><a className={`${styles.link_name}`} href="#">Explicatie</a></li>
        </ul>
      </li>
      <li>
        <div className={`${styles["iocn-link"]}`}>
          <a href="#">
            <i className="bx bx-collection" ></i>
            <span className={`${styles.link_name}`}>Exemple</span>
          </a>
          <i id = "exemple" className={`bx bxs-chevron-down ${styles.arrow}`} ></i>
        </div>
        <ul className={`${styles["sub-menu"]}`}>
          <li><a className={`${styles.link_name}`} href="#">Exemple</a></li>
          <li><a href="#">Exemplu</a></li>
          <li><a href="#">Numere mari</a></li>
          <li><a href="#">Hmm</a></li>
        </ul>
      </li>
</ul>
  </div>
  <section className={`${styles["home-section"]}`}>
      {this.props.children}
  </section>
        </>
    )
    }
}