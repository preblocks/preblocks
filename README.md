# Preblocks

A growing library of free, accessible UI blocks and components built on shadcn/ui and Tailwind CSS.

[Live Preview on preblocks.com](https://preblocks.com)

## Usage

You can add Preblocks as a registry namespace in your `components.json` file.

```json
{
  "registries": {
    "@preblocks": "https://preblocks.com/r/{name}.json"
  }
}
```

Once the registry is added, you can install any block or component provided by Preblocks using the shadcn CLI.

```bash
pnpm dlx shadcn add @preblocks/cta-1
# or
npx shadcn add @preblocks/cta-1
```

This command will install the [first Call to Action block](https://preblocks.com/react/call-to-action). You can find the CLI command to copy for each block in its top-right corner.


## License

Released under the [MIT License](https://github.com/preblocks/preblocks/blob/main/LICENSE).