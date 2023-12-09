import { useState, useEffect } from "react";


const useDimensions = () => {
  const getCurrentDimension = () => {
    return {
      width: innerWidth,
      height: innerHeight
    }
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    }
    window.addEventListener('resize', updateDimension);

    return(() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [])

  return screenSize;
}

export default useDimensions