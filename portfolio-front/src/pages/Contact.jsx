import { useRef } from "react"
import { Element } from "react-scroll"
import { motion, useInView } from "framer-motion"
import { useStateContext } from "../context/ContextProvider"


const Contact = () => {

  const {themeStyle, theme} = useStateContext();

  const refTitleContact = useRef(null);
  const isInViewTitleContact = useInView(
    refTitleContact, 
    { once: false , margin: "0px 20px -20px 0px"}
  );
  const refName = useRef(null);
  const isInViewName = useInView(
    refName, 
    { once: false , margin: "0px 20px -20px 0px"}
  );
  const refEmail = useRef(null);
  const isInViewEmail = useInView(
    refEmail, 
    { once: false , margin: "0px 20px -20px 0px"}
  );
  const refArea = useRef(null);
  const isInViewArea = useInView(
    refArea, 
    { once: false , margin: "0px 20px -20px 0px"}
  );
  const refBorderC = useRef(null);
  const isInViewBorderC = useInView(
    refBorderC, 
    { once: false , margin: "0px 20px -20px 0px"}
  );

  const refTextContact = useRef(null);
  const isInViewTextContact = useInView(
    refTextContact, 
    { once: false , margin: "0px 20px -20px 0px"}
  );

  const iconStyle = {
    width: 200,
    height: 200,
    opacity: 90,
    stroke: themeStyle.svgTertiary
  }

  return (
    <Element
      className="
        relative
        pt-[80px]
        md:pt-28
        pb-12
      "
      name="Contact"
    >
        <motion.div
          className={`
            absolute
            w-full
            px-5
            top-10
            md:top-[70px]
          `}
          ref={ refBorderC }
          initial={{ width: 0 }}
          animate={
            isInViewBorderC ? 
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
      <motion.div
        ref={ refTitleContact }
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInViewTitleContact ? 
          { opacity: 1, scale: 1 } :
          { opacity: 0, scale: 0.5 }
        }
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h3
          className={`
            text-[25px] 
            text-center 
            mb-8
            md:text-[35px] 
            lg:text-[40px] 
            text-opacity-90
            ${themeStyle.textTertiary}
          `}
        >
          Contact
        </h3>
      </motion.div>
      <div
        className="
          flex
          flex-col
          lg:grid
          lg:grid-cols-3
          xl:grid-cols-2
        "
      >
        <div
          className="
            lg:col-span-2
            xl:col-auto
          "
        >
          <motion.div
          className={`
            px-6
            mb-6
            text-opacity-90
            font-light
            ${themeStyle.textTertiary}
          `}
          ref={ refTextContact }
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInViewTextContact ? 
            { opacity: 1, scale: 1 } :
            { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <h4>
            N'hésitez pas à me contacter, je suis à votre disposition pour plus d'informations.
          </h4>
        </motion.div>
          <form
            className="
              mx-5
              z-20
            "
          >
            <motion.div 
              className="
                relative
                mb-7
              "
              ref={ refName }
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInViewName ? 
                { opacity: 1, scale: 1 } :
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <input 
                className={`
                  block 
                  px-5
                  pb-2.5 
                  pt-4 
                  w-full 
                  text-sm 
                  rounded-2xl
                  text-gray-900 
                  border
                  border-opacity-20
                  focus:border-none
                  focus:outline-none 
                  peer
                  bg-transparent
                  h-12
                  focus:ring-[0.5px]
                  ${themeStyle.borderTertiary}
                  ${themeStyle.textTertiary}
                  ${themeStyle.focus.borderColor}
                `}              
                type="text" 
                id="name" 
                placeholder=" " 
              />
              <label 
                className={`
                  absolute 
                  text-sm 
                  text-opacity-60
                  duration-300 
                  transform 
                  -translate-y-2
                  scale-75 
                  top-2
                  z-10 
                  origin-[0] 
                  bg-transparent
                  dark:bg-gray-900 
                  px-2 
                  peer-focus:px-2 
                  peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:-translate-y-1/2 
                  peer-placeholder-shown:top-1/2 
                  peer-focus:top-2 peer-focus:scale-75 
                  peer-focus:-translate-y-7
                  rtl:peer-focus:translate-x-1/4 
                  rtl:peer-focus:left-auto start-4
                  ${themeStyle.focus.textColor}
                  ${themeStyle.textTertiary}
                `}
                htmlFor="name" 
                >
                  Saisissez votre nom
                </label>
            </motion.div>
            <motion.div 
              className="
                relative
                mb-7
              "
              ref={ refEmail }
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInViewEmail ? 
                { opacity: 1, scale: 1 } :
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <input 
                className={`
                  block 
                  px-5
                  pb-2.5 
                  pt-4 
                  w-full 
                  text-sm 
                  rounded-2xl
                  text-gray-900 
                  border
                  border-opacity-20
                  focus:border-none
                  focus:outline-none 
                  peer
                  bg-transparent
                  h-12
                  focus:ring-[0.5px]
                  ${themeStyle.borderTertiary}
                  ${themeStyle.textTertiary}
                  ${themeStyle.focus.borderColor}
                `}              
                type="text" 
                id="email" 
                placeholder=" " 
              />
              <label 
                className={`
                  absolute 
                  text-sm 
                  text-opacity-60
                  duration-300 
                  transform 
                  -translate-y-2
                  scale-75 
                  top-2
                  z-10 
                  origin-[0] 
                  bg-transparent 
                  px-2 
                  peer-focus:px-2 
                  peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:-translate-y-1/2 
                  peer-placeholder-shown:top-1/2 
                  peer-focus:top-2 peer-focus:scale-75 
                  peer-focus:-translate-y-7
                  rtl:peer-focus:translate-x-1/4 
                  rtl:peer-focus:left-auto start-4
                  ${themeStyle.focus.textColor}
                  ${themeStyle.textTertiary}
                `}
                htmlFor="email" 
                >
                  Adresse email
                </label>
            </motion.div>
            <motion.div 
              className="
                relative
                mb-7
              "
              ref={ refArea }
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInViewArea ? 
                { opacity: 1, scale: 1 } :
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <textarea
                className={`
                  resize-none
                  block 
                  px-5
                  pb-2.5 
                  py-5
                  w-full 
                  rounded-2xl
                  border
                  border-opacity-20
                  focus:border-none
                  focus:outline-none 
                  focus:ring-[0.5px]
                  placeholder:text-sm
                  peer
                  bg-transparent
                  z-50
                  h-48
                  ${themeStyle.borderTertiary}
                  ${themeStyle.textTertiary}
                  ${themeStyle.focus.borderColor}
                `}              
                id="Message" 
                rows="7"
                placeholder="Votre message..."
                res
              ></textarea>
            </motion.div>
          </form>
        </div>
        <div
          className="
            flex
            justify-center
            my-5
          "
        >
          <h3
            className={`
              absolute
              pointer-events-none
              bottom-[100px]
              right-0
              xl:bottom-0 
              xl:right-[18px]
              custom-font-secondary
              
              tracking-[1px]
              text-[160px]
              xl:text-[250px]
              ${theme === 'Dark' ? "text-opacity-[0.015]" : "text-opacity-[0.050]"}
              ${themeStyle.textTertiary}
            `}
          >
            Contact
          </h3>
        </div>
      </div>

    </Element>
  )
}

export default Contact