import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CreateSpendHistory(){
    return(
        <Card>
            <CardHeader>
              <CardTitle>소비 이력 추가</CardTitle>
              <CardDescription>아래에 세부 사항을 기입 해주세요.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date">날짜</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">카테고리</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">가격</Label>
                <Input id="amount" type="number" step="0.01" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">상세</Label>
                <Textarea id="description" rows={3} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">이력 추가</Button>
            </CardFooter>
          </Card>
    )
}