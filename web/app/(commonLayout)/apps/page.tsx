'use client'
import { useTranslation } from 'react-i18next'
import Apps from './Apps'
import { useEducationInit } from '@/app/education-apply/hooks'
import { useGlobalPublicStore } from '@/context/global-public-context'

const AppList = () => {
  const { t } = useTranslation()
  useEducationInit()
  const { systemFeatures } = useGlobalPublicStore()
  return (
    <div className='relative flex h-0 shrink-0 grow flex-col overflow-y-auto bg-background-body'>
      <Apps />
      {!systemFeatures.branding.enabled && <div></div>
      //  <footer className='px-12 py-6 shrink-0 grow-0'>
      //   <h3 className='text-xl font-semibold leading-tight text-gradient'>{t('app.join')}</h3>
      //   <p className='mt-1 system-sm-regular text-text-tertiary'>{t('app.communityIntro')}</p>
      //   <div className='flex items-center gap-2 mt-3'>
      //     <Link className={style.socialMediaLink} target='_blank' rel='noopener noreferrer' href='https://github.com/langgenius/dify'>
      //       <RiGithubFill className='w-5 h-5 text-text-tertiary' />
      //     </Link>
      //     <Link className={style.socialMediaLink} target='_blank' rel='noopener noreferrer' href='https://discord.gg/FngNHpbcY7'>
      //       <RiDiscordFill className='w-5 h-5 text-text-tertiary' />
      //     </Link>
      //   </div>
      // </footer>
      }
    </div >
  )
}

export default AppList
