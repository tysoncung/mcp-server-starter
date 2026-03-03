import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: 'mcp-server-starter',
  version: '1.0.0',
});

// Example tool: echo
server.tool(
  'echo',
  'Echo back the provided message',
  { message: z.string().describe('Message to echo back') },
  async ({ message }) => {
    return { content: [{ type: 'text', text: message }] };
  },
);

// Example tool: hello
server.tool(
  'hello',
  'Greet someone by name',
  { name: z.string().describe('Name to greet') },
  async ({ name }) => {
    return { content: [{ type: 'text', text: `Hello, ${name}! 👋` }] };
  },
);

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server Starter running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
