
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export default function Recommendation() {

  const list = [
    {
      heading: 'Increase your online visibility and customers',
      recommendation: 'Search Engine Optimization (SEO)',
      description: 'SEO helps your business show up higher in search results. Think of it like tweaking your store\'s sign, layout, and reputation so more customers can find and trust you online.',
      cta: 'Speak with an SEO Expert',
      link: 'https://calendly.com/zoek-sales/seo-growth-consultation?back=1'
    },
    {
      heading: 'Create or Optimize Your Online Presence',
      recommendation: 'Website Design and Hosting Services',
      description: 'Zoek\'s Custom Website Services cater to every online need. Want a rapid launch? A tailored site custom-created for your brand? A website refresh? Or expert website management with top-tier security and continuous improvements? Trust Zoek for a distinguished online presence.',
      cta: 'Speak to a Website Design Expert',
      link: 'https://calendly.com/zoek-sales/website-design?back=1'
    },
    {
      heading: 'Generate More Leads and Revenue',
      recommendation: 'Paid Advertising',
      description: 'Paid advertising places your business directly in front of potential customers who are already interested in your products or services. Targeting specific audiences and keywords can quickly attract quality leads, increasing sales and revenue. It\'s like placing a billboard where only people likely to buy from you will see it.',
      cta: 'Speak with a Paid Ads Expert',
      link: 'https://calendly.com/zoek-sales/paid-ads-consultation?back=1'
    },
    {
      heading: 'Enhancing My Visual Brand',
      recommendation: 'Graphic Design and Branding',
      description: 'Zoek\'s Graphic Design and Branding Services act like a makeover for your business. We craft visuals that resonate with your audience, making your brand memorable and professional. We will turn your brand or business identity into a powerful visual story, helping you stand out and connect better with customers.',
      cta: 'Speak with a Visual Expert',
      link: 'https://calendly.com/zoek-sales/graphic-design-consultation?back=1'
    },
    {
      heading: 'Growing on Social Media',
      recommendation: 'Social Media Management',
      description: 'Zoek\'s Social Media Management Services act like a megaphone for your brand. Our experts have perfected how to craft and share engaging content, interact with your audience, and use innovative strategies to boost your online visibility and drive more business to your brand. By consistently representing your brand on social channels, we help you build a stronger, more connected online community, expanding your reach and influence.',
      cta: 'Speak with a Social Growth Expert',
      link: 'https://calendly.com/zoek-sales/social-media-management-services?back=1'
    },
    {
      heading: 'Unsure or have more than one interest?',
      recommendation: 'Speak to a Solutions Expert',
      description: 'Chatting with a Zoek Solutions Expert is like having a personal guide to deciding what is best for your business. We will assess your business needs, clarify options, and tailor recommendations. Whether you are uncertain or eyeing multiple services, we will pinpoint the best strategies to elevate your brand, ensuring you invest wisely.',
      cta: 'Speak with a Solutions Expert',
      link: 'https://calendly.com/zoek-sales/speak-with-a-solutions-expert?back=1'
    }
  ]
 
  return (
    <Accordion className="container" allowZeroExpanded>
      {list.map((item, idx) => (
        <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {item.heading}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h3>{item.recommendation}</h3>
              <p className="list-description">
                {item.description}
              </p>
              <a href={item.link} target="_blank">
                <button>
                  <p>{item.cta}</p>
                </button>
              </a>
            </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}