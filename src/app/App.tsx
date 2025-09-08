import {AppHeader} from "../components/app-header/AppHeader.tsx";
import styles from './App.module.scss';

function App() {
  return (
      <div className={styles.app}>
          <div className={styles.content}>
              <AppHeader/>
          </div>
      </div>

  )
}

export default App
