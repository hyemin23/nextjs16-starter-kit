import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-24 text-center md:py-32">
      <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
        v1.0 출시
      </Badge>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        프로덕트를 더 빠르게
        <br />
        <span className="text-muted-foreground">시작하세요</span>
      </h1>

      <p className="max-w-xl text-lg text-muted-foreground">
        인증, 대시보드, 마케팅 페이지가 포함된 Next.js 풀스택 스타터킷.
        아이디어에만 집중하세요.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/register">
            무료로 시작하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#features">기능 살펴보기</Link>
        </Button>
      </div>
    </section>
  )
}
