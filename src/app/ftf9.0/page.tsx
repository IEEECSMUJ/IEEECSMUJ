import { redirect } from 'next/navigation'

export default function FTF() {
  const meetUrl = "https://teams.microsoft.com/meet/42333137967671?p=dExFEpZiuxiJjaAhbX";
  redirect(meetUrl);

  return (
    <div>
    </div>
  );
}
