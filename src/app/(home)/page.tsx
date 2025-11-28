import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { GithubInfo } from 'fumadocs-ui/components/github-info'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <Badge variant="secondary">Now open source</Badge>

            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Beautiful blocks built with{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  shadcn/ui
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Preblocks is a collection of beautifully designed, ready-to-use
                components built on top of shadcn/ui. Copy, paste, and
                customize.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/docs/components/native-accordion">
                  Get Started
                  <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <GithubInfo owner="preblocks" repo="preblocks" />
              </Button>
            </div>

            <div className="pt-12 text-sm">
              {/* <div>
                <p className="text-2xl md:text-3xl font-bold">100%</p>
                <p className="text-muted-foreground">Customizable</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">MIT</p>
                <p className="text-muted-foreground">License</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-30 left-1/4 size-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/4 size-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  )
}
