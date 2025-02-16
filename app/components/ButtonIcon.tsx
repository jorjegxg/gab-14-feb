import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

export function ButtonIcon({ onClick , icon } : { onClick: () => void, icon: ReactNode }) {
  return (
    <Button variant="outline" size="icon" onClick={onClick}>
      {icon}
    </Button>
  )
}
