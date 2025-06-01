import type { SuiClient } from '@mysten/sui/client';
import { writable } from 'svelte/store';

export const walletConnected = writable(false);
export const walletAddress = writable<string | null>(null);
export const suiClient = writable<SuiClient | null>(null);
