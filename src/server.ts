import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function createServer(): McpServer {
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

  return server;
}
