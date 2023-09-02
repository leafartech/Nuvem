"use client"
import { useState } from "react";

export default function useFAQ() {
  const [ activeIndex, setActiveIndex ] = useState<number | null>(null)
  const questsFAQ = [
    {
      quest: "Arthur",
      answer: "É LINDO!"
    },
    {

      quest: "Rafa é fei",
      answer: "dms dms dsm"
    },
    {

      quest: "Queria uma mulher",
      answer: "!!!!"
    },
    {

      quest: "sdfklfndskjnglsdgsdsdg",
      answer: "fdsfbdjabfadfd"
    }
  ]
  
  function handleToggleFAQ(index: number) {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  


  return {
    questsFAQ,
    activeIndex,
    handleToggleFAQ
  }
}