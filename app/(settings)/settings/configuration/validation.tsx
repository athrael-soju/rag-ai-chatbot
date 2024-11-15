// validation.ts

import { z } from 'zod';

export const configurationSchema = z.object({
  processing: z.string().min(1, { message: 'Processing is required' }),
  vectorDB: z.string().min(1, { message: 'Vector DB is required' }),
  reranking: z.string().min(1, { message: 'Reranking is required' }),
  embedding: z.string().min(1, { message: 'Embedding is required' }),
  parameter1: z.string().min(1, { message: 'Parameter 1 is required' }),
  parameter2: z.string().min(1, { message: 'Parameter 2 is required' }),
  chunkSize: z.string().min(1, { message: 'Chunk size is required' }),
  overlap: z.string().min(1, { message: 'Overlap is required' }),
  method: z.string().min(1, { message: 'Method is required' }),
  topK: z.string().min(1, { message: 'Top K is required' }),
});

export type ConfigurationFormData = z.infer<typeof configurationSchema>;
