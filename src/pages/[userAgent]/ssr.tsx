import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const USER_AGENT = {
    PC: 'PC',
    SP: 'SP',
} as const
type UserAgent = keyof typeof USER_AGENT
const isUserAgent = (value: unknown): value is UserAgent => Object.values(USER_AGENT).includes(value as UserAgent)

export const getServerSideProps = (async (context) => {
  const userAgent = context.params?.userAgent
  if (!isUserAgent(userAgent)) throw new Error('Invalid user agent')
  return { props: { userAgent } }
}) satisfies GetServerSideProps<{ userAgent: UserAgent }>

export default function Page({
  userAgent,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{userAgent}</div>
}
