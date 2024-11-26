import BigDeals from "@/components/home/bigDeals/BigDeals";
import FeaturedProudcts from "@/components/home/featuredProudcts/FeaturedProudcts";
import MenCollection from "@/components/home/MenCollection/MenCollection";
import NewCustomer from "@/components/home/newCustomer/NewCustomer";
import Banner from "@/components/ui/Banner";

const HomePage = () => {
  return (
    <div className="bg-[#F4F8FF] min-h-screen ">
      <Banner></Banner>
      <div className="px-4 md:px-16">
        <FeaturedProudcts></FeaturedProudcts>
        <NewCustomer></NewCustomer>
        <MenCollection></MenCollection>
        <BigDeals></BigDeals>
      </div>
    </div>
  );
};

export default HomePage;
