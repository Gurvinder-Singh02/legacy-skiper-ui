import { Tab } from "./ui/tab"

export const PricingHeader = ({
  frequencies,
  selectedFrequency,
  onFrequencyChange,
}: {
  frequencies: string[]
  selectedFrequency: string
  onFrequencyChange: (frequency: string) => void
}) => (
  <div className="space-y-7 text-center">
    
    <div className="mx-auto flex w-fit rounded-full bg-[#F3F4F6] p-1 dark:bg-[#222]">
      {frequencies.map((freq) => (
        <Tab
          key={freq}
          text={freq}
          selected={selectedFrequency === freq}
          setSelected={onFrequencyChange}
          discount={freq === "yearly"}
        />
      ))}
    </div>
  </div>
)
