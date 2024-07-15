
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider />
      <Mission />
      <Services/>
    </div>
  );
}
