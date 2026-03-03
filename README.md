# MCP Server Starter Kit

Minimal [Model Context Protocol](https://modelcontextprotocol.io/) server template to get you started in minutes.

## Quick Start

```bash
npm install
npm run dev
```

## What's Included

- ✅ TypeScript strict mode
- ✅ Two example tools (echo, hello)
- ✅ Stdio transport (works with Claude Desktop)
- ✅ Zod input validation

## Connect to Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "starter": {
      "command": "node",
      "args": ["path/to/dist/index.js"]
    }
  }
}
```

## Want More?

Check out **[MCP Server Starter Kit Pro](https://github.com/tysoncung/mcp-server-starter-pro)** for:

- 🔧 Pre-built tool templates (database, REST API, filesystem, scraper, code runner)
- 🚀 Multiple transports (stdio + SSE)
- 🔒 Middleware stack (auth, rate limiting, logging)
- 🧪 Vitest testing setup
- 🐳 Docker support
- 📐 ESLint + Prettier config

## License

MIT
