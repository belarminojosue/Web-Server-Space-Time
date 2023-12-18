import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }
  return (
    <div className="z-30 py-14">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="relative z-40 space-y-4">
            <time className="absolute z-50 flex -translate-x-1/2 items-center gap-2 text-sm text-gray-100 after:h-px after:w-5 after:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <div className="px-16">
              <Image
                src={memory.coverUrl}
                width={592}
                height={280}
                className="aspect-video w-full object-cover"
                alt=""
              />
              <p className="text-lg leading-relaxed text-gray-100">
                {memory.excerpt}
              </p>

              <Link
                href={`/memories/${memory.id}`}
                className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
              >
                Ler mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
