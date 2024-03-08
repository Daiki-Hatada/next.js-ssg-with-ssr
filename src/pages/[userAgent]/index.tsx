import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

const USER_AGENT = {
  PC: 'PC',
  SP: 'SP',
} as const
type UserAgent = keyof typeof USER_AGENT
const isUserAgent = (value: unknown): value is UserAgent => Object.values(USER_AGENT).includes(value as UserAgent)

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          userAgent: 'PC',
        },
      },
      {
        params: {
          userAgent: 'SP',
        },
      },
    ],
    fallback: true,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  const userAgent = context.params?.userAgent
  if (!isUserAgent(userAgent)) throw new Error('Invalid user agent')
  return { props: { userAgent } }
}) satisfies GetStaticProps<{
  userAgent: UserAgent
}>

export default function Page({
  userAgent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{userAgent}</div>
}
