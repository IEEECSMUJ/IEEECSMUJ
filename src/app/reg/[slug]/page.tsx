
import {notFound, redirect} from 'next/navigation';

interface RedirectProps {
  params: { slug: string };
}

export default function RedirectRegistrations({params}: RedirectProps) {
  const {slug} = params;
  if (slug === "hs") {
    return redirect('https://unstop.com/p/hackerzstreet-40-manipal-university-mu-jaipur-1657990');
  } else if (slug === "mockup") {
    return redirect('https://unstop.com/o/5JHBCOz?lb=jRTzLubh&utm_medium=Share&utm_source=sarapan47121&utm_campaign=Online_coding_challenge');
  } else {
    return notFound();
  }
}
