'use client'
import { useTheme } from 'next-themes'

const ThemeChanger: React.FC = () => {
  const { theme, setTheme } = useTheme()

  function updateTheme(): void {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="flex flex-row">
      <button onClick={() => updateTheme()}>Toggle Theme</button>
    </div>
  )
}

export default ThemeChanger