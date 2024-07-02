import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function SpendHistoryView(){
    return(
        <Card>
            <CardHeader>
              <CardTitle>Spending History</CardTitle>
              <CardDescription>View and manage your spending details.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <Input type="search" placeholder="Search expenses..." className="w-[200px]" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <FilterIcon className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuLabel>Category</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Checkbox id="filter-food" /> Food
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="filter-transport" /> Transport
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="filter-utilities" /> Utilities
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="filter-entertainment" /> Entertainment
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Checkbox id="filter-other" /> Other
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuRadioGroup value="date-desc">
                      <DropdownMenuRadioItem value="date-desc">Date (Newest first)</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="date-asc">Date (Oldest first)</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="amount-desc">Amount (High to Low)</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="amount-asc">Amount (Low to High)</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
              <div className="border rounded-lg w-full">
                <div className="relative w-full overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2023-05-01</TableCell>
                        <TableCell>Food</TableCell>
                        <TableCell>Lunch at cafe</TableCell>
                        <TableCell className="text-right">$12.50</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-03</TableCell>
                        <TableCell>Transport</TableCell>
                        <TableCell>Gas for car</TableCell>
                        <TableCell className="text-right">$35.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-05</TableCell>
                        <TableCell>Utilities</TableCell>
                        <TableCell>Electricity bill</TableCell>
                        <TableCell className="text-right">$85.75</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-07</TableCell>
                        <TableCell>Entertainment</TableCell>
                        <TableCell>Movie tickets</TableCell>
                        <TableCell className="text-right">$22.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023-05-10</TableCell>
                        <TableCell>Other</TableCell>
                        <TableCell>New shoes</TableCell>
                        <TableCell className="text-right">$65.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
    )
}

function ArrowUpDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21 16-4 4-4-4" />
        <path d="M17 20V4" />
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </svg>
    )
  }

  function DownloadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    )
  }

  function FilterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    )
  }