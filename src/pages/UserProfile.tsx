import {UserProfileInfo} from "../components/user-profile-info/UserProfileInfo.tsx";
import {Outlet} from "react-router-dom";
import styles from './UserProfile.module.scss'
export function UserProfile() {
    return (
        <div className={styles.userProfile}>
            <UserProfileInfo/>
            <Outlet/>
        </div>
    )
}