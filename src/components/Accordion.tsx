import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

interface AccordionProps {
  question: string;
  answer: string;
}

interface AccordionsProps {
  accordion: AccordionProps
}

export const Accordion = ({ accordion }: AccordionsProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const { question, answer } = accordion;
  
  
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      <div className="bg-white border rounded-sm">
        <div className="min-h-[60px] flex items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div>
            {isOpen ? 
            (<FaChevronCircleUp className="text-[20px] text-neutral-500"/>) : 
            (<FaChevronCircleDown className="text-[20px] text-neutral-500"/>)}
          </div>
        </div>
        <div className={`${isOpen ? 
          'min-h-50 lg:min-h-40' :
          'min-h-0'
        } max-h-0 overflow-hidden flex justify-center trasition-all duration-100 px-[30px]`}>
          <div className="mt-6">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}