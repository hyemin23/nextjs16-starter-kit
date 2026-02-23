import {
  Zap,
  Shield,
  Palette,
  Smartphone,
  Code,
  Layers,
  type LucideIcon,
} from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "빠른 시작",
    description: "설정 없이 바로 개발을 시작하세요. 모든 기본 구성이 완료되어 있습니다.",
  },
  {
    icon: Shield,
    title: "타입 안전",
    description: "TypeScript와 Zod 스키마로 런타임까지 완벽한 타입 안전성을 보장합니다.",
  },
  {
    icon: Palette,
    title: "다크 모드",
    description: "시스템 설정에 따라 자동 전환되는 라이트/다크 모드를 지원합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description: "모바일부터 데스크톱까지 모든 화면 크기에 최적화되어 있습니다.",
  },
  {
    icon: Code,
    title: "모던 스택",
    description: "Next.js 16, Tailwind CSS v4, ShadcnUI 등 최신 기술을 사용합니다.",
  },
  {
    icon: Layers,
    title: "컴포넌트 계층",
    description: "5계층 아키텍처로 체계적이고 확장 가능한 컴포넌트 구조를 제공합니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-24 md:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          모든 것이 준비되어 있습니다
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          프로덕션에 바로 사용할 수 있는 기능들을 제공합니다.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
