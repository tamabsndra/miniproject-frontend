import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
