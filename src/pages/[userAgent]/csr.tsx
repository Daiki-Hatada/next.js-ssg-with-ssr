import { useRouter } from "next/router"
import { useMemo } from "react"

export default function Page() {
  const router = useRouter()
  const { userAgent } = useMemo(() => router.query, [router])
  return <div>{userAgent}</div>
}
