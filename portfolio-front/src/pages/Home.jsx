import { useRef } from "react"
import { Element } from "react-scroll"
import clsx from "clsx"
import { motion, useInView, useCycle } from "framer-motion"
import { AnimatedGradientText } from "../registry/magicui/animated-gradient-text"
import { useStateContext } from "../context/ContextProvider"
import ProfileInfos from "../components/profileInfos/ProfileInfos"
import useDimensions from "../components/customHooks/useDimensions"
import ContactWrap from "../components/wrappers/ContactWrap"
import LinkedinIcon from "../components/icons/LinkedinIcon"
import GitHubIcon from "../components/icons/GitHubIcon"
import MailIcon from "../components/icons/MailIcon"
import ProfileIcon from "../components/icons/ProfileIcon"
import ProfileInfoIcon from "../components/icons/ProfileInfoIcon"
import CloseIcon from "../components/icons/CloseIcon"
import { BorderBeam } from "../registry/magicui/border-beam"


const Home = () => {

  const { themeStyle, theme } = useStateContext();
  const [isOpenDetail, toggleOpenDetail] = useCycle(false, true);
  const screenSize = useDimensions();

  const refFour = useRef(null);
  const isInViewFour = useInView(refFour, { once: false, margin: "0px 10px -10px 0px" });
  const refFourH = useRef(null);
  const isInViewFourH = useInView(refFourH, { once: false, margin: "0px 10px -10px 0px" });
  const refFive = useRef(null);
  const isInViewFive = useInView(refFive, { once: false, margin: "0px 10px -10px 0px" });
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: false, margin: "0px 10px -10px 0px" });
  const refBorder = useRef(null);
  const isInViewBorder = useInView(refBorder, { once: false, margin: "0px 10px -10px 0px" });

  const iconStyle = {
    width: screenSize.width < 1024 ? 18 : 20,
    height: screenSize.width < 1024 ? 18 : 20,
    fill: themeStyle.svgTertiary,
    opacity: 'opacity-100'
  };

  const brandIconSize = () => {
    if (screenSize.width <= 640) {
      return "220";
    } else if (screenSize.width > 640 && screenSize.width < 768) {
      return "260";
    } else if (screenSize.width > 768 && screenSize.width < 1024) {
      return "270";
    } else if (screenSize.width > 1024 && screenSize.width < 1280) {
      return "310";
    } else if (screenSize.width > 1280 && screenSize.width < 1536) {
      return "330";
    } else if (screenSize.width >= 1536) {
      return "350";
    }
  };


  return (
    <Element
      name="Home"
      className="
        snap-center
        min-h-full
      "
    >
      <div
        className="
          flex
          flex-col
          justify-around
          min-h-screen
          pt-[100px]
          md:pt-[170px]
        "
      >
        <div
          className={
            clsx(
              "relative",
              "flex",
              "flex-col-reverse",
              "items-center",
              "justify-center",
              "md:flex-row",
              "lg:justify-around",
              "mx-5",
              "md:mx-0",
              "py-7",
              "-my-7",
              "md:py-14",
              "md:-my-14",
              screenSize.width <= 640 ? "rounded-[5px]" : "rounded-[30px]"
            )
          }
        >
          <BorderBeam
            className={
              theme === 'Dark' ?
              "from-transparent via-zinc-400 to-transparent" :
              "from-transparent via-[#8f8e8ec2] to-transparent"
            }
            size={screenSize.width <= 640 ? 200 : 500}
          />
          <BorderBeam
            className={
              theme === 'Dark' ?
              "from-transparent via-zinc-400 to-transparent" :
              "from-transparent via-[#8f8e8ec2] to-transparent"
            }
            size={screenSize.width <= 640 ? 200 : 500}
            delay={3}
          />
          <div
            className="
              flex
              flex-col
              justify-center
              items-center
              md:items-start
              px-3
              md:px-0
              mt-5
              md:mt-0
            "
          >
            <div
              className="
                relative
                flex
                flex-col
                items-center
                md:mb-3
              "
            >
              <motion.div
                ref={refFour}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInViewFour ?
                    { opacity: 1, scale: 1 } :
                    { opacity: 0, scale: 0.5 }
                }
                transition={{
                  duration: 0.5,
                  delay: screenSize.width <= 640 ? 0.2 : 0.1,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                <h1
                  className={`
                    mt-2
                    md:mt-7
                    text-center
                    text-opacity-90
                    ${themeStyle.textColor}
                  `}
                >
                  <span
                    className="
                      font-bold
                      text-[35px]
                      sm:text-[38px]
                      md:text-[32px]
                      lg:text-[34px]
                      xl:text-[48px]
                      tracking-[1px]
                      custom-font-secondary
                    "
                  >
                    <AnimatedGradientText
                      speed={1}
                      colorFrom={theme === 'Dark' ? "#1C48C5" : "#3E90A6"}
                      colorTo={theme === 'Dark' ? "#192966" : "#AEC4C6"}
                    >
                      Jérôme Tissot
                    </AnimatedGradientText>
                  </span>
                </h1>
              </motion.div>
              <motion.div
                ref={refFourH}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInViewFourH ?
                    { opacity: 1, scale: 1 } :
                    { opacity: 0, scale: 0.5 }
                }
                transition={{
                  duration: 0.5,
                  delay: screenSize.width <= 640 ? 0.3 : 0.2,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                <h2
                  className={`
                  mt-2
                  text-center
                  font-bold
                  text-[40px]
                  sm:text-[44px]
                  md:text-[42px]
                  lg:text-[44px]
                  xl:text-[54px]
                  tracking-[1.5px]
                  leading-9
                  lg:leading-none
                  ${themeStyle.textTertiary}
                `}
                >
                  <span>DEVELOPPEUR</span><br />
                  <span>FULLSTACK</span>
                </h2>
              </motion.div>
              <motion.div
                className="
                  w-full
                  flex
                  justify-between
                  mt-[60px]
                  md:mt-10
                  lg:mt-20
                "
                ref={refContact}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInViewContact ?
                    { opacity: 1, scale: 1 } :
                    { opacity: 0, scale: 0.5 }
                }
                transition={{
                  duration: 0.5,
                  delay: screenSize.width <= 640 ? 0.4 : 0.3,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                <ContactWrap
                  icon={
                    <GitHubIcon
                      style={iconStyle}
                    />
                  }
                  path="https://github.com/JTissot-Dev"
                >
                  GitHub
                </ContactWrap>
                <ContactWrap
                  icon={
                    <LinkedinIcon
                      style={iconStyle}
                    />
                  }
                  path="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-tissot-616514292/"
                >
                  Linkedin
                </ContactWrap>
                <ContactWrap
                  icon={
                    <MailIcon
                      style={iconStyle}
                    />
                  }
                  path="mailto:jerome.tissot.dev@gmail.com"
                >
                  Mailto
                </ContactWrap>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="
              mb-2
              h-64
              md:h-fit
              md:mb-0
              md:mt-0
              "
            ref={refFive}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewFive ?
                { opacity: 1, scale: 1 } :
                { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: screenSize.width <= 768 ? 0.1 : 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <motion.div
              className={`
                relative
                flex
                justify-center
                rounded-[17%]
                md:w-[270px]
                lg:w-[310px]
                xl:w-[332px]
                2xl:w-[340px]
                ${isOpenDetail ?
                  "border " +
                  "border-opacity-20 " +
                  themeStyle.borderTertiary +
                  " " + themeStyle.bgColor : ""

                }
              `}
              initial={{ scale: 1 }}
              animate={
                isOpenDetail ?
                  { scale: 1.1 } :
                  { scale: 1 }
              }
            >
              <motion.button
                className={`
                  absolute
                  top-4
                  right-4
                  md:top-7
                  md:right-7
                  rounded-full
                  p-2
                  md:p-2.5
                  lg:p-3
                  ${!isOpenDetail ?
                    "border " +
                    "border-opacity-40" :
                    ""
                  }
                  z-10
                  ${themeStyle.borderTertiary}
                `}
                type="button"
                onClick={toggleOpenDetail}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {
                  !isOpenDetail ?
                    <ProfileInfoIcon /> :
                    <CloseIcon />
                }
              </motion.button>
              {
                isOpenDetail &&
                <ProfileInfos />
              }
              <ProfileIcon isOpenDetail={isOpenDetail} size={brandIconSize()} />
            </motion.div>
          </motion.div>
        </div>
        <div
          className="
            flex
            flex-col
            justify-center
            h-[100px]
            md:h-[150px]
          "
        >
          <motion.div
            className={`
            h-[0.5px]
            w-full
            px-5
            md:px-0
          `}
            ref={refBorder}
            initial={{ width: 0 }}
            animate={
              isInViewBorder ?
                { width: "100%" } :
                { width: 0 }
            }
            transition={{
              duration: 2,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <div
              className={`
              border-t
              border-opacity-30
              ${themeStyle.borderTertiary}
            `}
            >
            </div>
          </motion.div>
        </div>

      </div>


    </Element>
  )
}

export default Home