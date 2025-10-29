import {AppHeader} from "../components/app-header/AppHeader.tsx";
import {Outlet} from "react-router-dom";
import styles from './MainLayout.module.scss';

export function MainLayout() {
    return (
        <div className={styles.layout}>
            <AppHeader/>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </div>
    )
}