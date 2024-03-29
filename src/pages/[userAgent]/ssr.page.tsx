import { UserAgent, isUserAgent } from '../../utils/userAgent'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export const getServerSideProps = (async (context) => {
  const userAgent = context.params?.userAgent
  if (!isUserAgent(userAgent)) throw new Error('Invalid user agent')
  return { props: { userAgent } }
}) satisfies GetServerSideProps<{ userAgent: UserAgent }>

export default function Page({ userAgent }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{userAgent}</div>
}
