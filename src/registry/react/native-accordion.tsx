import { ChevronDownIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Accordion({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>
}) {
  return <div ref={ref} className={cn('divide-y', className)} {...props} />
}

function AccordionItem({
  ref,
  className,
  ...props
}: React.DetailsHTMLAttributes<HTMLDetailsElement> & {
  ref?: React.RefObject<HTMLDetailsElement | null>
}) {
  return (
    <details
      ref={ref}
      className={cn(
        'group details-content:transition-[height_opacity_content-visibility] details-content:transition-discrete details-content:h-0 details-content:opacity-0 details-content:overflow-clip',
        'open:details-content:h-auto open:details-content:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  ref,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  ref?: React.RefObject<HTMLElement | null>
}) {
  return (
    <summary
      ref={ref}
      className={cn(
        'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
        'list-none [&::-webkit-details-marker]:hidden',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-open:rotate-180" />
    </summary>
  )
}

function AccordionContent({
  ref,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div
      ref={ref}
      className={cn('pt-0 pb-4 overflow-hidden text-sm', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
