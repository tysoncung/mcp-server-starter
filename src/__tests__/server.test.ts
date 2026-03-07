import { describe, it, expect } from 'vitest';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { createServer } from '../server.js';

describe('MCP Server', () => {
  async function setupClient() {
    const server = createServer();
    const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();

    await server.connect(serverTransport);

    const client = new Client({ name: 'test-client', version: '1.0.0' });
    await client.connect(clientTransport);

    return client;
  }

  it('lists the echo tool', async () => {
    const client = await setupClient();
    const { tools } = await client.listTools();

    expect(tools).toHaveLength(1);
    expect(tools[0].name).toBe('echo');
  });

  it('echo tool returns the message', async () => {
    const client = await setupClient();
    const result = await client.callTool({
      name: 'echo',
      arguments: { message: 'Hello, MCP!' },
    });

    expect(result.content).toEqual([
      { type: 'text', text: 'Echo: Hello, MCP!' },
    ]);
  });
});
