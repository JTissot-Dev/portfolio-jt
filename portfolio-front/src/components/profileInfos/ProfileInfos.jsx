import { motion } from "framer-motion"
import InfoItem from "./InfoItem"
import { useStateContext } from "../../context/ContextProvider"
import LocationIcon from "../icons/LocationIcon"
import BirthDayIcon from "../icons/BirthDayIcon"
import PhoneIcon from "../icons/PhoneIcon"
import MailProfileIcon from "../icons/MailProfileIcon"


const ProfileInfos = () => {

  const {themeStyle} = useStateContext();

  const iconStyle = {
    width: 20,
    height: 20,
    fill: themeStyle.svgTertiary
  };

  return (
    <motion.ul 
      className={`
        absolute
        bottom-5
        left-5
        sm:bottom-6
        sm:left-6
        lg:bottom-7
        lg:left-7
        xl:bottom-10
        xl:left-10
      `}
    >
      <InfoItem 
        delay={ 0.05 }
      >
        <BirthDayIcon 
          style={ iconStyle }
        />
        <span
          className="ms-2"
        >31 ans</span>
      </InfoItem>
      <InfoItem
        delay={ 0.1 }
      >
        <LocationIcon 
          style={ iconStyle }
        />
        <span
          className="ms-2"
        >Lyon (69)</span>
      </InfoItem>
      <InfoItem
        delay={ 0.15 }
      >
        <PhoneIcon
          style={ iconStyle }
        />
        <span
          className="ms-2"
        >06 01 03 46 22</span>
      </InfoItem>
      <InfoItem 
        delay={ 0.2 }
      >
        <MailProfileIcon
          style={ iconStyle }
        />
        <span
          className="ms-2"
        >jerome.tissot.dev@gmail.com</span>
      </InfoItem>
    </motion.ul>
  )
}


export default ProfileInfos