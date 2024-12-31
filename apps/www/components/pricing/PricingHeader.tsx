import { GradientHeading } from "@/registry/default/ui/gradient-heading";
import { Tab } from "./ui/tab";

export const PricingHeader = ({
  title,
  subtitle,
  frequencies,
  selectedFrequency,
  onFrequencyChange,
}: {
  title: string;
  subtitle: string;
  frequencies: string[];
  selectedFrequency: string;
  onFrequencyChange: (frequency: string) => void;
}) => (
  <div className="space-y-7 text-center">
    <div className="space-y-4">
      <GradientHeading
        size="xll"
        weight="bold"
        className="text-center text-xl font-bold    tracking-tighter lg:leading-[0.5rem] "
      >
        <br className="hidden md:block" /> {title}
      </GradientHeading>
      <p className="text-center text-base  leading-3  text-foreground md:pt-8 md:text-xl md:font-normal md:leading-6" >{subtitle}</p>
    </div>
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
);
