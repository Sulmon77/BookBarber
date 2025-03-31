"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [service, setService] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !service || !time) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required to book an appointment.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Appointment booked!",
      description: `Your ${service} appointment is confirmed for ${format(date, "PPP")} at ${time}.`,
    })

    // Reset form
    setDate(undefined)
    setService("")
    setTime("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Service
        </label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="haircut">Haircut</SelectItem>
            <SelectItem value="beard-trim">Beard Trim</SelectItem>
            <SelectItem value="hot-towel-shave">Hot Towel Shave</SelectItem>
            <SelectItem value="haircut-and-beard">Haircut & Beard Trim</SelectItem>
            <SelectItem value="full-service">Full Service Package</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Time
        </label>
        <Select value={time} onValueChange={setTime}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="9:00 AM">9:00 AM</SelectItem>
            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
            <SelectItem value="11:00 AM">11:00 AM</SelectItem>
            <SelectItem value="12:00 PM">12:00 PM</SelectItem>
            <SelectItem value="1:00 PM">1:00 PM</SelectItem>
            <SelectItem value="2:00 PM">2:00 PM</SelectItem>
            <SelectItem value="3:00 PM">3:00 PM</SelectItem>
            <SelectItem value="4:00 PM">4:00 PM</SelectItem>
            <SelectItem value="5:00 PM">5:00 PM</SelectItem>
            <SelectItem value="6:00 PM">6:00 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Book Appointment
      </Button>
    </form>
  )
}

