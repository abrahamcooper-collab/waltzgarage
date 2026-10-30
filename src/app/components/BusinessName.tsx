import type { ReactNode } from "react";

export const BUSINESS_NAME = "Waltz's Garage";

export const MAPS_URL =
  "https://www.google.com/maps/place/Waltz's+Garage/@41.4511459,-85.2689499,17z/data=!3m1!4b1!4m6!3m5!1s0x8816153463d78597:0x87d9051ad7e36787!8m2!3d41.4511459!4d-85.2689499!16s%2Fg%2F11p1g36sz_?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

/** Business name rendered as a link to the Google Business profile. */
export default function BusinessName({
  className = "underline underline-offset-2 hover:opacity-80 transition-opacity",
  children = BUSINESS_NAME,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

/** Replaces every occurrence of the business name in plain text with a BusinessName link. */
export function withBusinessLinks(text: string): ReactNode {
  const parts = text.split(BUSINESS_NAME);
  return parts.flatMap((part, i) =>
    i === 0 ? [part] : [<BusinessName key={i} />, part]
  );
}
