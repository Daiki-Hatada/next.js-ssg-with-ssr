import { UserAgent, isUserAgent } from '../../../../utils/userAgent'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { MobilePage } from '../ssg/components/MobilePage'
import { DesktopPage } from '../ssg/components/DesktopPage'

export const getServerSideProps = (async (context) => {
  const userAgent = context.params?.userAgent
  if (!isUserAgent(userAgent)) throw new Error('Invalid user agent')
  return { props: { userAgent } }
}) satisfies GetServerSideProps<{ userAgent: UserAgent }>

export default function Page({ userAgent }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (userAgent === 'SP') return <MobilePage />
  if (userAgent === 'PC') return <DesktopPage />
  return null
}
