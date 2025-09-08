import {Text} from "../../ui/text/Text.tsx";
import styles from './AppHeader.module.scss';
import {ButtonInfo} from "../../ui/button-info/ButtonInfo.tsx";
import IconEmails from "../../assets/images/icons/ui/Emails.svg";
import IconMessages from "../../assets/images/icons/ui/Messages.svg";

export const AppHeader = () => {
    const handleClick = () => {
        console.log("clicked");
    }
  return (
      <div className={styles.container}>
          <Text tag={'p'} size={'Title'}>corporate-workers</Text>
          <Text tag={'p'} size={'Title'} weight={'Semibold'}>Профиль</Text>
          <div className={styles.btns}>
              <ButtonInfo onClick={handleClick}>
                  <IconEmails width={24} height={24} />
              </ButtonInfo>
              <ButtonInfo onClick={handleClick}>
                  <IconMessages width={24} height={24} />
              </ButtonInfo>
          </div>
      </div>
  )
}