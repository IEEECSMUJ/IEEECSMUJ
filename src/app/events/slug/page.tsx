import { notFound } from "next/navigation";
import eventsData from "../../data/eventdata";

export const dynamicParams = true;

export function generateStaticParams() {
  return eventsData.map((event) => ({ slug: event.id.toString() }));
}

interface DetailsProps {
  params: { slug?: string };
}

const Details = ({ params }: DetailsProps) => {
  const { slug } = params;
  const parsedSlug = Number.parseInt(slug ?? "", 10);
  const event = eventsData.find((x) => x.id === parsedSlug);

  if (!event) return notFound();

  return (
    <>
      <div className="bg-custom-gradient min-h-screen py-40 flex flex-col sm: items-center xl:flex-row gap-12 px-6 md:px-40">
        <img
          src={event.imageUrl}
          className="w-[25rem] xl:h-[38rem]"
          alt={"poster"}
        />
        <div className="border-white border-l-4 h-[30rem] hidden xl:block"></div>
        <div className="border-white border-b-4 w-[20rem] block xl:hidden"></div>
        <div className="text-white text-xl flex flex-col gap-4 px-10 md:px-32 xl:px-0">
          <div>
            <Title text={"Description"} />
            <Content text={event.description} />
          </div>
          <div>
            <Title text={"Date and Time"} />
            <div className="flex flex-row gap-2">
              <Content text={event.dateAndTime.split("|")[0]} />
              <Content text={"|"} />
              <Content text={event.dateAndTime.split("|")[1]} />
            </div>
          </div>
          <div>
            <Title text={"Venue"} />
            <Content text={event.venue} />
          </div>
        </div>
      </div>
    </>
  );
};

const Title = ({ text }: { text: string | undefined }) => {
  return <div className="font-[600] underline">{text}:</div>;
};

const Content = ({ text }: { text: string | undefined }) => {
  return <div>{text}</div>;
};

export default Details;
