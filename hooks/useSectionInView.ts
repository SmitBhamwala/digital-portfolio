import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionNameType } from "@/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(
  sectionName: SectionNameType,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1500) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref
  };
}
