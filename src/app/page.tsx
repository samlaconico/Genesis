
import InstagramFeed from "@/components/InstagramFeed";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-36 lg:pt-0">
      <Slider />
      <Mission />
      <Services/>
      <InstagramFeed/>
    </div>
  );
}
