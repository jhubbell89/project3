import './Jokes.css'

export default function JokeApp() {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Jokes App
          </h1>
  
          <p className={styles.description}>
            Find the funniest jokes and memes
          </p>
  
          <div class={styles.actionBtn}>
            <button className={styles.jokeBtn}> Generate Joke </button>
            <button className={styles.memeBtn}> Generate Meme </button>
          </div>
          <div className={styles.grid}>
              <span className={styles.card}>
              </span>
          </div>
        </main>
      </div>
    )
  }