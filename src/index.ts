import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: 'mcp-server-starter',
  version: '1.0.0',
});

// Example tool: echo
// This shows the basic pattern for defining MCP tools.
// Each tool has a name, description, input schema (using Zod), and a handler.
server.tool(
  'echo',
  'Echo back the provided message. A simple example to demonstrate the MCP tool pattern.',
  { message: z.string().describe('The message to echo back') },
  async ({ message }) => {
    return {
      content: [{ type: 'text', text: `Echo: ${message}` }],
    };
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
