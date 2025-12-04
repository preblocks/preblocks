import { Linkedin, Mail, Twitter, Youtube } from 'lucide-react'
import React from 'react'

export interface FooterProps {
  name?: string
  description?: string
  sections?: {
    title: string
    links: {
      label: string
      href: string
    }[]
  }[]
  socialLinks?: {
    name: string
    href: string
    icon: React.ElementType
  }[]
}

const sampleSections = [
  {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
]

const sampleSocialLinks = [
  { name: 'Mail', href: '#', icon: Mail },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer({
  name = 'Acme Corp',
  description = 'Building the future of web applications with modern technologies.',
  sections = sampleSections,
  socialLinks = sampleSocialLinks,
}: FooterProps) {
  return (
    <footer className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-xl font-bold">{name}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {sections.map(section => (
          <div key={section.title}>
            <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} ${name}. All rights reserved.`}
        </p>

        <div className="flex gap-4">
          {socialLinks.map(social => {
            return (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="size-5" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
