"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], options: IntersectionObserverInit = { threshold: 0.5 }) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, options)
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => {
        observer.disconnect()
      })
    }
  }, [sectionIds, options])

  return activeSection
}
