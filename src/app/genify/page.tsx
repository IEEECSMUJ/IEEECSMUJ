import { redirect } from 'next/navigation'

export default function GENIFY() {
  const meet_Url = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Yjc0YjIwYzUtOWRhOC00NmVjLThkZWMtNGVjZWE3OGY2YTcx%40thread.v2/0?context=%7b%22Tid%22%3a%2227282fdd-4c0b-4dfb-ba91-228cd83fdf71%22%2c%22Oid%22%3a%222f88dc83-ccea-4c6e-b6a4-c1adb004eb6f%22%7d";
  redirect(meet_Url);

  return (
    <div>
    </div>
  );
}
