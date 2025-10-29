import styles from './UserProfileInfo.module.scss'
import {Text} from "../../ui/text/Text.tsx";
import {Link, useLocation} from "react-router-dom";
import {ButtonNav} from "../../ui/button-nav/ButtonNav.tsx";
import IconMain from "../../assets/images/icons/ui/mainSection.svg";
import IconProfile from "../../assets/images/icons/ui/profileSection.svg";
import IconCoin from "../../assets/images/icons/ui/coin.svg";

export function UserProfileInfo() {
    const location = useLocation();

    const isMainSection = location.pathname === "/userProfile";
    const isInfoSection = location.pathname === "/userProfile/info";

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <div className={styles.avatar_img}>
                    <img src='../../../public/vite.svg' alt='dd'/>
                </div>

                <div className={styles.avatar_text}>
                    <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Medium'}>Иванова мария , 21 год</Text>
                    <Text tag={'p'} size={'Small'} color={'Secondary'} weight={'Light'}>официант</Text>
                </div>
            </div>

            <div className={styles.level}>
                <Text tag={"p"} size={"Title"} color={'Main'} weight={'Bold'}>1 уровень</Text>
                <div className={styles.level_coin}>
                    <Text tag={"p"} size={'Standard'} color={'Main'}> | </Text>
                    <IconCoin/>
                    <Text tag={"p"} size={"Title"} color={'Main'} weight={'Bold'}>1345</Text>
                </div>
            </div>

            <div className={styles.navigation}>
                <Link to={'/userProfile'}>
                    <ButtonNav active={isMainSection? 'active' : ''} text='Главная'>
                        <IconMain width={24} height={24} />
                    </ButtonNav>
                </Link>
                <Link to={'/userProfile/info'}>
                    <ButtonNav active={isInfoSection? 'active' : ''} text='Профиль'>
                        <IconProfile width={24} height={24} />
                    </ButtonNav>
                </Link>
            </div>

        </div>
    )
}