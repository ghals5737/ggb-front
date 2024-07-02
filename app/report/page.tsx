'use client'

import Report from "@/components/report/report"

export default function Component() {
  return (
      <div className="flex flex-col">
        <header className="flex h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <h1 className="font-semibold text-lg">Reports</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Report></Report>
        </main>
      </div>
  )
}

