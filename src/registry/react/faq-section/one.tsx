import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Props {
  title?: string
  description?: string
  faqs?: {
    question: string
    answer: string
  }[]
  footerText?: string
  footerLink?: string
  footerLinkText?: string
}

const sampleFaqs = [
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate the process.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping takes 5-7 business days. Express options are available at checkout for 2-3 day delivery.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship to over 50 countries worldwide. International shipping times vary by location and customs processing.',
  },
  {
    question: 'How can I track my order?',
    answer:
      "Once your order ships, you'll receive an email with a tracking number. You can also log into your account to view order status.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.',
  },
]

export default function FAQSection({
  title = 'Frequently Asked Questions',
  description = 'Everything you need to know about our product.',
  faqs = sampleFaqs,
  footerText = 'Still have questions?',
  footerLink = '#',
  footerLinkText = 'Contact our support team',
}: Props) {
  return (
    <section className="w-full bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:mt-3">
            {description}
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {footerText}
            <a
              href={footerLink}
              className="ml-1 font-medium underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {footerLinkText}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
