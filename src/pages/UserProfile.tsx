import {UserProfileInfo} from "../components/user-profile-info/UserProfileInfo.tsx";
import {Outlet} from "react-router-dom";

export function UserProfile() {
    return (
        <div>
            <UserProfileInfo/>
            <Outlet/>
        </div>
    )
}