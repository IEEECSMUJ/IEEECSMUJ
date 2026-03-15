import {notFound, redirect} from 'next/navigation';

interface RedirectProps {
  params: { slug: string };
}

export default function RedirectRegistrations({params}: RedirectProps) {
  const {slug} = params;
  if (slug === "hs") {
    return redirect('');
  } else if (slug === "mockup") {
    return redirect('');
  } else {
    return notFound();
  }
}