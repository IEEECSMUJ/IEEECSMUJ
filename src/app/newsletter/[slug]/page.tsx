import { notFound, redirect } from 'next/navigation';
import newsletterData from "../../data/newsletterData";

interface NewsletterPageProps {
  params: { slug: string };
}

export default function Newsletter({ params }: NewsletterPageProps) {
  const { slug } = params;

  const year = parseInt(slug.slice(-2), 10) + 2000;
  const month = slug.slice(0, -2).toLowerCase();

  const newsletter = newsletterData.find(
    (item) => item.month === month && item.year === year
  );

  if (newsletter?.url) {
    redirect(newsletter.url);
  }

  return notFound();
}