import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {UserProfile} from "../pages/UserProfile.tsx";
import styles from './App.module.scss'
import {MainProfileSection} from "../components/user-section/main-profile-section/MainProfileSection.tsx";
import {InfoProfileSection} from "../components/user-section/info-profile-section/InfoProfileSection.tsx";
import {Provider} from "react-redux";
import {store} from "../store/store.ts";
function App() {
  return (
      <Provider store={store}>
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
      </Provider>
  )
}

export default App
