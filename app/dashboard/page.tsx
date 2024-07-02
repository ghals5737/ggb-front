'use client'
import CreateSpendHistory from "@/components/dashboard/spend/createSpendHistory"
import SpendHistoryView from "@/components/dashboard/spend/spendHistoryView"
export default function DashBoard(){
    return (
        <div className="flex flex-col">
        <header className="flex h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <h1 className="font-semibold text-lg">Spending</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <CreateSpendHistory></CreateSpendHistory>
          <SpendHistoryView></SpendHistoryView>
        </main>
        </div>
    )
} 