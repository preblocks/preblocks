import { Button } from '@/components/ui/button'

interface Props {
  headline?: string
  subline?: string
  primaryAction?: { text: string; href: string }
  secondaryAction?: { text: string; href: string }
}

export default function CtaSection({
  headline = 'Ready to Get Started?',
  subline = 'Join thousands of teams building better products today. No credit card required.',
  primaryAction = { text: 'Start Free Trial', href: '#' },
  secondaryAction = { text: 'View Demo', href: '#' },
}: Props) {
  return (
    <section className="w-full py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="font-bold text-3xl md:text-4xl">{headline}</h2>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          {subline}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-5 py-2 text-sm">
            <a href={primaryAction.href}>{primaryAction.text}</a>
          </Button>
          <Button variant="outline" asChild className="px-5 py-2 text-sm">
            <a href={secondaryAction.href}>{secondaryAction.text}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
