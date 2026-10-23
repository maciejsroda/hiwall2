import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionIntro({ eyebrow, title, description, align = "left", className }) {
  const centered = align === "center";

  return (
    <Reveal className={cn(centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow text-oak", centered && "justify-center")}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-5 max-w-3xl text-[2rem] font-light leading-[1.15] tracking-[-0.02em] text-charcoal sm:text-[2.5rem] lg:text-[3.15rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-[1.02rem] leading-relaxed text-graphite",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}