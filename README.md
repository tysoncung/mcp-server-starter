# MCP Server Starter Kit

A minimal [Model Context Protocol](https://modelcontextprotocol.io/) server template to get you building MCP tools in minutes.

Build custom tools that AI assistants like Claude can use — database queries, API calls, file operations, and more.

## Quick Start

```bash
git clone https://github.com/tysoncung/mcp-server-starter.git
cd mcp-server-starter
npm install
npm run dev
```

That's it. Your MCP server is running.

## How It Works

This starter gives you a working MCP server with one example tool (`echo`) that demonstrates the pattern:

```typescript
server.tool(
  'echo',                                           // Tool name
  'Echo back the provided message',                 // Description for the AI
  { message: z.string().describe('Message text') }, // Input schema (Zod)
  async ({ message }) => {                          // Handler
    return { content: [{ type: 'text', text: `Echo: ${message}` }] };
  },
);
```

To add your own tools, follow the same pattern. Define a name, describe what it does, declare the inputs with Zod, and write the handler.

## Connect to Claude Desktop

Build the project and add it to your Claude Desktop config:

```bash
npm run build
```

Then add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "starter": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-server-starter/dist/index.js"]
    }
  }
}
```

Restart Claude Desktop and your tools will be available.

## What's Included

- ✅ TypeScript with strict mode
- ✅ MCP SDK wired up and ready
- ✅ Example tool with Zod input validation
- ✅ Stdio transport (works with Claude Desktop)
- ✅ Hot reload dev mode (`npm run dev`)

## Want More? 🚀

This free starter gets you up and running. The **[Pro version](https://tysoncung.gumroad.com)** gives you everything you need to build production MCP servers:

| | Free | Pro ($49) |
|---|---|---|
| Example tools | 1 (echo) | 6 ready-to-use templates |
| Tool templates | — | Database, REST API, filesystem, web scraper, code runner |
| Transport | stdio | stdio + SSE (remote access) |
| Authentication | — | API key + JWT middleware |
| Rate limiting | — | ✅ Built-in |
| Logging | — | Structured logging middleware |
| Testing | — | Vitest setup with examples |
| Docker | — | Dockerfile + docker-compose |
| Linting | — | ESLint + Prettier configured |
| Error handling | Basic | Production-grade with retries |

**[👉 Get the Pro Starter Kit →](https://tysoncung.gumroad.com)**

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start with hot reload (tsx watch) |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled output |

## Requirements

- Node.js ≥ 20
- npm

## License

MIT — see [LICENSE](LICENSE)
