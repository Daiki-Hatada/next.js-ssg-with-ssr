export const USER_AGENT = {
  PC: 'PC',
  SP: 'SP',
} as const
export type UserAgent = keyof typeof USER_AGENT
export const isUserAgent = (value: unknown): value is UserAgent =>
  Object.values(USER_AGENT).includes(value as UserAgent)
