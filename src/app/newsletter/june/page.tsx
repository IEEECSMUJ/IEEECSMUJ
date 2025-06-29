import { redirect } from 'next/navigation'

export default function June() {
  const newsletterUrl = "https://drive.google.com/file/d/1svxuAckkjO_7ZuMVEP-H3HKZH89mP4vL/view";
  redirect(newsletterUrl);

  return (
    <div></div>
  );
}