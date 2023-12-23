import { useStateContext } from "../../context/ContextProvider"



const ProfileIcon = ({size, isOpenDetail}) => {

  const {theme} = useStateContext();

  return (
    <img 
      className={`
        rounded-[17%]
        ${ isOpenDetail ? "opacity-10" : "opacity-90"}
      `}
      width={size} 
      height={size} 
      src={theme === 'Dark' ? "/img/profile.png" : "/img/profile-light.png"} 
      alt="profile" 
    />
  )
}

export default ProfileIcon