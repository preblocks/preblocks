import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Props {
  title?: string
  description?: string
  faqGroups?: {
    groupTitle: string
    items: {
      question: string
      answer: string
    }[]
  }[]
  footerText?: string
  footerLink?: string
  footerLinkText?: string
}

const sampleFaqGroups = [
  {
    groupTitle: 'General',
    items: [
      {
        question: 'What is your return policy?',
        answer: '30-day returns on unused items.',
      },
      {
        question: 'How long does shipping take?',
        answer: '5-7 business days standard.',
      },
    ],
  },
  {
    groupTitle: 'Payment & Security',
    items: [
      {
        question: 'What payment methods are accepted?',
        answer: 'Cards, PayPal, Apple Pay, Google Pay.',
      },
      {
        question: 'Is checkout secure?',
        answer: 'Yes, SSL encrypted and PCI compliant.',
      },
    ],
  },
]

export default function FAQSection({
  title = 'FAQs',
  description = 'Find quick answers to common questions grouped by topic. Browse the categories on the right.',
  faqGroups = sampleFaqGroups,
  footerText = 'Need more help?',
  footerLink = '#',
  footerLinkText = 'Contact support',
}: Props) {
  return (
    <section className="w-full bg-background py-8 md:py-10">
      <div className="container mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 md:gap-8 md:px-6">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:mt-3">
            {description}
          </p>
          <div className="mt-6">
            <p className="text-xs text-muted-foreground">
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
        <div className="md:col-span-2">
          {faqGroups.map((group, gIdx) => (
            <div key={group.groupTitle} className="mb-6 last:mb-0">
              <h3 className="mb-2 text-base font-semibold">
                {group.groupTitle}
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {group.items.map((item, idx) => (
                  <AccordionItem
                    key={item.question}
                    value={`g${gIdx}-i${idx}`}
                    className="last:border-b-0"
                  >
                    <AccordionTrigger className="py-3 text-left text-sm font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 text-sm text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
