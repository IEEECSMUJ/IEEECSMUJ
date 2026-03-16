
import { notFound, redirect } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "hs" }, { slug: "mockup" }];
}

interface RedirectProps {
  params: { slug: string };
}

const registrationLinks: Record<string, string> = {
  hs: "https://unstop.com/p/hackerzstreet-40-manipal-university-mu-jaipur-1657990",
  mockup:
    "https://unstop.com/o/5JHBCOz?lb=jRTzLubh&utm_medium=Share&utm_source=sarapan47121&utm_campaign=Online_coding_challenge",
};

export default function RedirectRegistrations({ params }: RedirectProps) {
  const targetUrl = registrationLinks[params.slug?.toLowerCase()];

  if (targetUrl) {
    return redirect(targetUrl);
  }

  return notFound();
}
