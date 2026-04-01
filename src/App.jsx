import style from './App.module.scss'

function App() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        Tues, March 31, 2026
      </div>

      <div className={style.photoContainer}>
        <img 
          src="/free-draw.jpeg"
          alt="photo"
          className={style.photo}
        />

        <img 
          src="/unicast.jpeg"
          alt="photo"
          className={style.photo}
        />
      </div>

    </div>
  )
}

export default App
