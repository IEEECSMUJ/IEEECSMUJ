import { redirect } from 'next/navigation'

export default function FTF() {
  const meetUrl = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDY5NzZjNDctZjEyOS00NTE0LWJmNTctNDM1M2I4NzA4MDVl%40thread.v2/0?context=%7b%22Tid%22%3a%2227282fdd-4c0b-4dfb-ba91-228cd83fdf71%22%2c%22Oid%22%3a%22ec5689ee-3cdf-48d2-91a2-5f64afdea558%22%7d";
  redirect(meetUrl);

  return (
    <div>
    </div>
  );
}
