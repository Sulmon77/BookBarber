"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BookingForm } from "./booking-form"

export function BookingDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Your Appointment</DialogTitle>
          <DialogDescription>
            Select your preferred service, date, and time. We'll confirm your booking via email.
          </DialogDescription>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  )
}

