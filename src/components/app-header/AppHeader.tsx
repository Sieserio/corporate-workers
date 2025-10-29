import {Text} from "../../ui/text/Text.tsx";
import styles from './AppHeader.module.scss';
import {ButtonInfo} from "../../ui/button-info/ButtonInfo.tsx";
import IconEmails from "../../assets/images/icons/ui/Emails.svg";
import IconMessages from "../../assets/images/icons/ui/Messages.svg";
import {Link} from "react-router-dom";

export const AppHeader = () => {
    const handleClick = () => {
        console.log("clicked");
    }
  return (
      <div className={styles.container}>
          <Text tag={'p'} size={'Title'}> <Link to='/'> corporate-workers </Link> </Text>
          <Text tag={'p'} size={'Title'} weight={'Semibold'}> <Link to='/userProfile'> Профиль </Link> </Text>
          <div className={styles.btns}>
              <ButtonInfo onClick={handleClick}>
                  <IconEmails width={24} height={24} className={styles.icon} />
              </ButtonInfo>
              <ButtonInfo onClick={handleClick}>
                  <IconMessages width={24} height={24} className={styles.icon} />
              </ButtonInfo>
          </div>
      </div>
  )
}