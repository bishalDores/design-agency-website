import Banner from "./components/Banner";
import CompanyOverview from "./components/CompanyOverview";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1320px] md:px-[75px] px-4">
      <Banner />
      <CompanyOverview />
    </div>
  );
}
