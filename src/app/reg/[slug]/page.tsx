import { notFound, redirect } from "next/navigation";

interface RedirectProps {
  params: Promise<{ slug?: string }>;
}

const registrationLinks: Record<string, string> = {
  hs: "https://unstop.com/p/hackerzstreet-40-manipal-university-mu-jaipur-1657990",
  mockup:
    "https://unstop.com/o/5JHBCOz?lb=jRTzLubh&utm_medium=Share&utm_source=sarapan47121&utm_campaign=Online_coding_challenge",
};

export default async function RedirectRegistrations({ params }: RedirectProps) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const targetUrl = registrationLinks[slug.toLowerCase()];

  if (targetUrl) {
    redirect(targetUrl);
  }

  return notFound();
}