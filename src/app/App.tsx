import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {UserProfile} from "../pages/UserProfile.tsx";
import styles from './App.module.scss'
import {MainProfileSection} from "../components/user-section/main-profile-section/MainProfileSection.tsx";
import {InfoProfileSection} from "../components/user-section/info-profile-section/InfoProfileSection.tsx";
import {Provider} from "react-redux";
import {store} from "../store/store.ts";
import {TaskDetails} from "../components/task/task-details/TaskDetails.tsx";
import {ModalRoute} from "../components/modal/modal-route/ModalRoute.tsx";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}

//Route
function AppRouter() {
    const location = useLocation();
    const state = location.state as { background?: Location };

    // Определяем background location для модалки
    const background = state?.background || location;

    return (
        <div className={styles.app}>
            <Routes location={background}>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='userProfile' element={<UserProfile/>}>
                        <Route index element={<MainProfileSection/>}/>
                        <Route path='info' element={<InfoProfileSection/>}/>
                    </Route>
                </Route>
            </Routes>

            {state?.background && (
                <Routes>
                    <Route path='tasks/:id' element={
                        <ModalRoute showButtonClose={true}>
                            <TaskDetails/>
                        </ModalRoute>
                    }/>
                </Routes>
            )}
        </div>
    );
}

export default App