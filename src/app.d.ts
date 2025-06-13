// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		suiWallet?: {
			requestPermissions(): Promise<void>;
			getAccounts(): Promise<string[]>;
			signAndExecuteTransactionBlock(input: unknown): Promise<unknown>;
		};
		[key: string]: unknown;
	}
}

export {};
