'use client'
import { useState } from "react"

const LanguageChanger: React.FC = () => {
  const [language, setLanguage] = useState<string>()

  function updateLanguage(): void {
    if (language === 'english') {
      setLanguage('japanese')
    } else {
      setLanguage('english')
    }
  }

  return (
    <div className="flex flex-row">
      <button onClick={() => updateLanguage()}>Toggle Language</button>
    </div>
  )
}

export default LanguageChanger