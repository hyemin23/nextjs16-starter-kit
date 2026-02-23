import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Users, CreditCard, Activity, TrendingUp } from "lucide-react"

const stats = [
  { title: "총 사용자", value: "1,234", change: "+12%", icon: Users },
  { title: "매출", value: "₩12,345,000", change: "+8%", icon: CreditCard },
  { title: "활성 세션", value: "573", change: "+2%", icon: Activity },
  { title: "성장률", value: "24%", change: "+4%", icon: TrendingUp },
]

const recentActivities = [
  { user: "김민수", action: "회원가입", status: "완료", date: "2분 전" },
  { user: "이영희", action: "결제", status: "완료", date: "5분 전" },
  { user: "박철수", action: "프로필 수정", status: "완료", date: "12분 전" },
  { user: "최지은", action: "문의 등록", status: "대기", date: "30분 전" },
  { user: "정수현", action: "구독 갱신", status: "완료", date: "1시간 전" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">서비스 현황을 한눈에 확인하세요.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                전월 대비{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {stat.change}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>최근 사용자 활동 내역입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>사용자</TableHead>
                <TableHead>활동</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">시간</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    {activity.user}
                  </TableCell>
                  <TableCell>{activity.action}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        activity.status === "완료" ? "default" : "secondary"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{activity.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
