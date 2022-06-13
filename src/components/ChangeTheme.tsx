// eslint-disable-next-line import/named
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import React, { useState, useEffect, VFC } from 'react'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'

type ChangeThemeProps = Omit<IconButtonProps, 'aria-label'>

export const ChangeTheme: React.VFC<ChangeThemeProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  return (
    <>
      <button
        aria-label='DarkModeToggle'
        type='button'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='fixed top-[3%] right-[3%] z-50 text-[2rem]'
      >
        {mounted && <>{theme === 'dark' ? <MoonIcon /> : <SunIcon />}</>}
      </button>
    </>
  )
}
