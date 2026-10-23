import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Logo marki pokazywane jako obraz. Podmiana pliku (IMAGES.logo w
 * src/lib/content.js) wystarcza, aby zaktualizować logo w całym serwisie.
 */
export default function Wordmark({ className }) {
  return (
    <Image
      src={IMAGES.logo}
      alt="HiWall"
      className={cn("h-7 w-auto object-contain object-left md:h-8", className)}
      fittingType="fit"
      originWidth={1963}
      originHeight={556}
    />
  );
}