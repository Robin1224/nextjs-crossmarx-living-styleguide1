'use client'

import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState, useEffect } from 'react'

interface Props {}
export default function DarkmodeToggle({}: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState<boolean>(theme === 'dark' ? true : false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
    console.log("mounted")
  }, [])

  useEffect(() => {
    checked ? setTheme('dark') : setTheme('light')
  }, [checked, setTheme])

  if (!mounted) {
    return null
  }

  return (
    <DarkModeSwitch checked={checked} onChange={setChecked} size={56} />
  )
}