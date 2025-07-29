import { useCallback, useState } from 'react'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'

import type {
  ModelProvider,
} from './declarations'
import {
  useMarketplaceAllPlugins,
} from './hooks'
import Divider from '@/app/components/base/divider'
import ProviderCard from '@/app/components/plugins/provider-card'
import type { Plugin } from '@/app/components/plugins/types'
import { getLocaleOnClient } from '@/i18n-config'

type InstallFromMarketplaceProps = {
  providers: ModelProvider[]
  searchText: string
}
const InstallFromMarketplace = ({
  providers,
  searchText,
}: InstallFromMarketplaceProps) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [collapse, setCollapse] = useState(false)
  const locale = getLocaleOnClient()
  const {
    plugins: allPlugins,
    isLoading: isAllPluginsLoading,
  } = useMarketplaceAllPlugins(providers, searchText)

  const cardRender = useCallback((plugin: Plugin) => {
    if (plugin.type === 'bundle')
      return null

    return <ProviderCard key={plugin.plugin_id} payload={plugin} />
  }, [])

  return (
    <div className='mb-2'>
      <Divider className='!mt-4 h-px' />
      <div className='flex items-center justify-between'>
        {/* <div className='flex items-center gap-1 cursor-pointer system-md-semibold text-text-primary' onClick={() => setCollapse(!collapse)}>
          <RiArrowDownSLine className={cn('h-4 w-4', collapse && '-rotate-90')} />
          {t('common.modelProvider.installProvider')}
        </div> */}
        {/* <div className='flex items-center pt-2 mb-2'>
          <span className='pr-1 system-sm-regular text-text-tertiary'>{t('common.modelProvider.discoverMore')}</span>
          <Link target="_blank" href={getMarketplaceUrl('', { theme })} className='inline-flex items-center system-sm-medium text-text-accent'>
            {t('plugin.marketplace.difyMarketplace')}
            <RiArrowRightUpLine className='w-4 h-4' />
          </Link>
        </div> */}
      </div>
      {/* {!collapse && isAllPluginsLoading && <Loading type='area' />} */}
      {/* {
        !isAllPluginsLoading && !collapse && (
          <List
            marketplaceCollections={[]}
            marketplaceCollectionPluginsMap={{}}
            plugins={allPlugins}
            showInstallButton
            locale={locale}
            cardContainerClassName='grid grid-cols-2 gap-2'
            cardRender={cardRender}
            emptyClassName='h-auto'
          />
        )
      } */}
    </div>
  )
}

export default InstallFromMarketplace
