import About from "@/components/about/About"
import MenuWrapper from "@/components/product/MenuWrapper"
import Campaigns from "@/components/ui/Campaigns"
import Carosel from "@/components/ui/Carosel"

const Home = () => {
  return (
    <div>
      <Carosel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </div>
  )
}

export default Home