import { LayoutDashboard, Settings, User, FileText, BarChart3 } from "lucide-react"
import { type DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    { title: "대시보드", href: "/dashboard", icon: LayoutDashboard },
    { title: "분석", href: "#", icon: BarChart3 },
    { title: "콘텐츠", href: "#", icon: FileText },
    { title: "프로필", href: "#", icon: User },
    { title: "설정", href: "#", icon: Settings },
  ],
}
