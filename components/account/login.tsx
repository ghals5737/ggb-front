import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function login() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center flex-1 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <Link href="#" className="flex items-center gap-2 mb-6" prefetch={false}>
              <WalletIcon className="w-6 h-6" />
              <span className="text-xl font-semibold">Spend Tracker</span>
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center">Sign in to your account</h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember-me" />
                    <Label htmlFor="remember-me" className="ml-2 text-sm">
                      Remember me
                    </Label>
                  </div>
                  <div className="text-sm">
                    <Link href="#" className="font-medium text-primary hover:underline" prefetch={false}>
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}