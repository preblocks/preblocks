import { IconBrandGithub, IconBrandGoogleFilled } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldContent, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export default function LoginOne() {
  return (
    <section className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg pb-0">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <FieldContent>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </FieldContent>
          </Field>

          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <FieldContent>
              <Input id="password" type="password" />
            </FieldContent>
          </Field>

          <Button className="w-full">Sign in</Button>

          <div className="relative flex justify-center items-center w-full">
            <div className="border-border absolute h-px w-full border-t" />
            <span className="bg-background text-muted-foreground relative px-2 text-xs">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <IconBrandGithub className="size-4" />
              Github
            </Button>
            <Button variant="outline" className="w-full">
              <IconBrandGoogleFilled className="size-4" />
              Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="justify-center bg-muted/50 [.border-t]:py-3 border-t">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a href="#" className="font-semibold text-primary hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}
