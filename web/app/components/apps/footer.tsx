import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

type CustomLinkProps = {
  href: string
  children: React.ReactNode
}

const CustomLink = React.memo(({
  href,
  children,
}: CustomLinkProps) => {
  return (
    <Link
      className='flex h-8 w-8 cursor-pointer items-center justify-center transition-opacity duration-200 ease-in-out hover:opacity-80'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      {children}
    </Link>
  )
})

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='shrink-0 grow-0 px-12 py-6'>
      {/* <h3 className='text-xl font-semibold leading-tight text-gradient'>{t('app.join')}</h3>
      <p className='mt-1 system-sm-regular text-text-tertiary'>{t('app.communityIntro')}</p>
      */}
      {/* <div className='flex items-center gap-2 mt-3'>
        <CustomLink href='https://github.com/langgenius/dify'>
          <RiGithubFill className='w-5 h-5 text-text-tertiary' />
        </CustomLink>
        <CustomLink href='https://discord.gg/FngNHpbcY7'>
          <RiDiscordFill className='w-5 h-5 text-text-tertiary' />
        </CustomLink>
      </div> */}
    </footer>
  )
}

export default React.memo(Footer)
