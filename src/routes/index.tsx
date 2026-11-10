import { useEffect, useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({ component: App })

function App() {
  const [hydrated, setHydrated] = useState(false)
  const [clicks, setClicks] = useState(0)

  useEffect(() => setHydrated(true), [])

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button
            className="mt-2"
            disabled={!hydrated}
            onClick={() => setClicks((n) => n + 1)}
          >
            {clicks === 0
              ? "Button"
              : `Clicked ${clicks} ${clicks === 1 ? "time" : "times"}`}
          </Button>
        </div>
      </div>
    </div>
  )
}
