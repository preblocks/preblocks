import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      links={[
        {
          text: 'Docs',
          url: '/docs',
        },
        {
          text: 'Components',
          url: '/docs/components/native-accordion',
        },
      ]}
      {...baseOptions()}
    >
      {children}
    </HomeLayout>
  )
}
