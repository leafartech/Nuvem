"use client"
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import useFAQ from "./hook/useFAQ";

export default function FAQ() {
  const { questsFAQ, handleToggleFAQ, activeIndex } = useFAQ()

  return (
    <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-3">
      {questsFAQ.map((faq, index) => (
        <>
        <button
        key={faq.quest}
          onClick={() => handleToggleFAQ(index)}
          className={`flex justify-between items-center p-2 cursor-pointer border duration-500 rounded-md w-full min-w-full text-lg sm:text-2xl ${activeIndex === index ? "border-my font-bold" : "border-gray-600"}`}
        >
          {faq.quest}
            <ChevronRightIcon className={`duration-500 w-6 h-6 ${activeIndex === index ? "rotate-[0deg]" : "rotate-90"}`} />
        </button>
        {activeIndex === index && (
          <div className={`overflow-hidden px-2 ${activeIndex === index ? "max-h-[200px]": "max-h-0"}`}>
          <p className="text-gray-600 text-sm sm:text-lg mt-2 text-justify">
            {faq.answer}
          </p>
          </div>
        )}
        </>        
      ))}
    </div>
  )
}