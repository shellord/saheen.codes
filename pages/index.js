import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>saheen.codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <img src="/logoepic.png" alt="epiclogo" width="250"/>

        <h1 className={styles.title}>
          Welcome to <a href="#">saheen.codes</a>
        </h1>

        <p className={styles.description}>
          Yet Another Coder
        </p>
        <div class={styles.socialIconList}>
         <a href="https://www.facebook.com/BeastHaxor/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/facebook.png" className={styles.socialIcon}/></a>
         <a href="https://www.youtube.com/channel/UCO9nfwZE7J7GkubwmUna9tA" target="_blank"> <img src="https://img.icons8.com/fluent/48/000000/youtube-play.png" className={styles.socialIcon}/></a>
         <a href="https://www.instagram.com/saheenshoukath/" target="_blank"> <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" className={styles.socialIcon}/></a>
        </div>
       
        </main>

      <footer className={styles.footer}>
        <a href="https://www.instagram.com/saheenshoukath/"
          target="_blank"
        >
          Designed by SaheenShoukath</a>
      </footer>
    </div>
  )
}
