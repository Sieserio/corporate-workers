import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {UserProfile} from "../pages/UserProfile.tsx";
import styles from './App.module.scss'
import {MainProfileSection} from "../components/main-profile-section/MainProfileSection.tsx";
import {InfoProfileSection} from "../components/info-profile-section/InfoProfileSection.tsx";
function App() {
  return (
      <BrowserRouter>
          <div className={styles.app}>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path='userProfile' element={<UserProfile/>}>
                    <Route index element={<MainProfileSection/>}/>
                    <Route path='info' element={<InfoProfileSection/>}/>
                </Route>
            </Route>
        </Routes>
          </div>
      </BrowserRouter>

  )
}

export default App
