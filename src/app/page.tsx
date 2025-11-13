"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BarChart, Briefcase, Building, CreditCard, Globe, Linkedin, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="gradientBars"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g6464c2525eec2bfd47ccdac079d9326cccacc68537927b577b6809c0bc663627923c86be2b27b2ba7a24f5412c737d679889168531df93ef0c89e976875b5080_1280.jpg"
          brandName="The Techshop"
          button={{
            text: "Contact Us",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Patient and active capital for the best early-stage ventures"
          description="We partner with founders at the seed stage in the B2B digital space, providing both active support and strategic know-how."
          tag="Venture Capital"
          tagIcon={TrendingUp}
          buttons={[
            {
              text: "View Portfolio",
              href: "portfolio"
            },
            {
              text: "Contact Us",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g0f8f8650ad8727cecab7d0947570aed27c760b491ccc35024aed5e32cb54b77b07f187ec83bf9842963b30f2d7efc52e99539f48a3d57f5f5baad24e98b6fb3b_1280.jpg"
          imageAlt="Modern venture capital office"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="We partner with founders at the seed stage, providing both active support and strategic know-how for B2B digital ventures."
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "View Portfolio",
              href: "portfolio"
            }
          ]}
        />
      </div>
      
      <div id="portfolio" data-section="portfolio">
        <FeatureCardFour
          title="Portfolio"
          description="Our portfolio of early-stage B2B digital ventures"
          tag="Investments"
          tagIcon={Briefcase}
          features={[
            {
              title: "B2B SaaS",
              description: "Enterprise software solutions that streamline business operations and drive digital transformation for companies worldwide.",
              icon: Building
            },
            {
              title: "Digital Platforms",
              description: "Innovative marketplace and platform solutions connecting businesses and enabling new models of commerce and collaboration.",
              icon: Globe
            },
            {
              title: "Fintech Solutions",
              description: "Financial technology companies revolutionizing how businesses manage payments, lending, and financial services.",
              icon: CreditCard
            },
            {
              title: "Data Analytics",
              description: "Advanced analytics and AI-powered solutions helping businesses make data-driven decisions and optimize performance.",
              icon: BarChart
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          buttons={[
            {
              text: "View All Investments",
              href: "portfolio"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced professionals dedicated to supporting exceptional founders"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marco Santarelli",
              role: "Managing Partner",
              description: "Former co-founder of multiple tech ventures with extensive experience in B2B digital investments and startup scaling.",
              imageSrc: "https://pixabay.com/get/g7e093d5153b65a701389287da04edeb94c3c82fa35c94ef34c45b67f447ad2ac3d3bdc031e211e4ae614df6eb998d83252496b6bad9e7363c5cccfa76cabff71_1280.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/marco-santarelli"
                }
              ]
            },
            {
              id: "2",
              name: "Sofia Rossi",
              role: "Investment Director",
              description: "Investment professional with deep expertise in seed-stage venture capital and strategic partnership development.",
              imageSrc: "https://pixabay.com/get/g53c1a5159844a6fb2d7738dc6eb80f336e392c12a57cd74a915e8e80f58d6b9464c32d8e8ca729eac4080e5ced25c529dbc9135f7d96a6c3b0abf707bd8e9c7a_1280.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sofia-rossi"
                }
              ]
            },
            {
              id: "3",
              name: "Alessandro Bianchi",
              role: "Partner",
              description: "Technology veteran with 15+ years building and scaling B2B digital platforms across Europe.",
              imageSrc: "https://pixabay.com/get/gf70b14429dc100a90b57ea8c3d214cb1ef471fac9db165276d56ec247e501b7425a25c2d8ca906f74d2c228c043bbcb2ed434c11a043e091bcd462c10d6c8634_1280.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/alessandro-bianchi"
                }
              ]
            },
            {
              id: "4",
              name: "Giulia Ferrari",
              role: "Principal",
              description: "Former startup founder turned investor, specializing in early-stage B2B SaaS and marketplace investments.",
              imageSrc: "https://pixabay.com/get/g1787171216cd15d54b54493570ec847bd47d02d6a2e8503b98e1fcb69578d38ccfe355f2d42a3a1f16a6a3de9ff650c9e63f8e9bb3f0ad42dee4c46c899b6c7b_1280.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/giulia-ferrari"
                }
              ]
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Interested in learning more about The Techshop or discussing a potential partnership? We'd love to hear from you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your venture or inquiry...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://pixabay.com/get/g6464c2525eec2bfd47ccdac079d9326cccacc68537927b577b6809c0bc663627923c86be2b27b2ba7a24f5412c737d679889168531df93ef0c89e976875b5080_1280.jpg"
          logoText="The Techshop"
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "News",
                  href: "news"
                }
              ]
            },
            {
              title: "Investment",
              items: [
                {
                  label: "Portfolio",
                  href: "portfolio"
                },
                {
                  label: "Approach",
                  href: "approach"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/techshop-sgr",
              ariaLabel: "LinkedIn"
            }
          ]}
          copyrightText="© 2025 The Techshop SGR S.p.A. | Iscritta al n. 194 dell'Albo delle Società di Gestione del Risparmio ex art. 35 TUF"
        />
      </div>
    </ThemeProvider>
  );
}