import Hero from "~/app/components/hero";
import Faq from "~/app/components/faq";

export default function Home() {
    return (
        <>
            <div>
                <Hero />
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <Faq />
                </div>
            </div>
        </>
    );
}