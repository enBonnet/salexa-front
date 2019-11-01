import { useState, useEffect } from "react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    const innerWidth = window.innerWidth
    if (innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  return isMobile
}

export default useIsMobile
