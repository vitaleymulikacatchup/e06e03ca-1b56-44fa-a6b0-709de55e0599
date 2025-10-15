"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "modern office workspace - Photo by Jakub Zerdzicki" },
  { "id": "feature1", "url": "https://images.pexels.com/photos/5257759/pexels-photo-5257759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Four colleagues brainstorming around a laptop in a bright, modern office setting." },
  { "id": "feature2", "url": "https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Man standing at a whiteboard planning UX design concepts in a modern office setting." },
  { "id": "feature3", "url": "https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Dynamic geometric pattern of an architectural facade in Toronto, showcasing modern design." },
  { "id": "team-member1", "url": "https://images.pexels.com/photos/34234336/pexels-photo-34234336.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Business team having a casual meeting on a rooftop terrace with a cityscape view." },
  { "id": "team-member2", "url": "https://images.pexels.com/photos/34234302/pexels-photo-34234302.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Confident woman in vibrant office, highlighting teamwork and productivity." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" }
          ]}
          logoSrc="/brand/logo.svg"
          buttonText="Contact"
          buttonVariant="text-stagger"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pastel-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Build Your Next Great Product"
            description="Join thousands of businesses leveraging our building blocks."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "features" }
            ]}
            className="bg-pastel-blue-100"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="features" data-section="features" className="scroll-mt-24 bg-pastel-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Powerful Features to Enhance Your Product"
            features={[
              { title: "Customizable", description: "Easily tailor components to fit your brand.", imageSrc: assetMap.find(a => a.id === "feature1")?.url },
              { title: "Scalable", description: "Expand your project without limits.", imageSrc: assetMap.find(a => a.id === "feature2")?.url },
              { title: "Reliable", description: "Built with security and performance in mind.", imageSrc: assetMap.find(a => a.id === "feature3")?.url }
            ]}
            className="bg-pastel-blue-100"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing" className="scroll-mt-24 bg-pastel-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardTwo
            title="Choose Your Pricing Plan"
            plans={[
              { id: "basic", badge: "Starter", price: "$10/mo", subtitle: "Ideal for small projects", features: ["Access to all components", "Community support"], buttons: [{ text: "Sign Up", href: "https://example.com" }] },
              { id: "pro", badge: "Most Popular", price: "$50/mo", subtitle: "For growing businesses", features: ["Priority support", "Early access to updates"], buttons: [{ text: "Sign Up", href: "https://example.com" }, { text: "Contact Sales", href: "contact" }] }
            ]}
            className="bg-pastel-blue-100"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="team" data-section="team" className="scroll-mt-24 bg-pastel-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            title="Meet Our Team"
            members={[
              { id: "1", name: "John Doe", role: "Lead Developer", imageSrc: assetMap.find(a => a.id === "team-member1")?.url },
              { id: "2", name: "Jane Smith", role: "Product Manager", imageSrc: assetMap.find(a => a.id === "team-member2")?.url }
            ]}
            className="bg-pastel-blue-100"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24 bg-pastel-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <FaqDouble
            title="Frequently Asked Questions"
            faqs={[
              { id: "1", title: "How do I start?", content: "Sign up and follow the onboarding steps." },
              { id: "2", title: "What is the refund policy?", content: "We offer 30-day money-back guarantee." }
            ]}
            className="bg-pastel-blue-100"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pastel-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Reach Out"
            title="Stay Updated"
            description="Subscribe to our newsletter for the latest updates and features."
            className="bg-pastel-blue-100"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pastel-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Careers", href: "https://example.com" }] }
            ]}
            copyrightText="© 2025 Mvpblocks"
            className="bg-pastel-blue-100"
            logoClassName="text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}