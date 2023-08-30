
import Stats from "@/components/Stats"
import Business from "@/components/Business"
import Billing from "@/components/Billing"
import CardDeal from "@/components/CardDeal"
import Testimonials from "@/components/Testimonials"
import Clients from "@/components/Clients"
import CTA from "@/components/CTA"
import Footer_Content from "@/components/Footer_Content"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="bg-primary">

<Navbar/>
  <header className="w-full h-full">
<Hero/>
  </header>

   <main className="">
<Stats/>
<Business/>
<Billing />
<CardDeal/>
<Testimonials/>
<Clients />
<CTA/>
 </main>
 <footer>
<Footer_Content/>
</footer>

   </div>
  )
}
