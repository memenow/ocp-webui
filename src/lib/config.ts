import { browser, dev } from '$app/environment';
import { env } from '$env/dynamic/public';

// Default configuration
const defaultConfig = {
	// Sui Network
	suiNetwork: 'testnet',
	suiRpcUrl: 'https://fullnode.testnet.sui.io:443',

	// Application
	appName: 'Open Content Protocol',
	appUrl: 'https://ocp-webui.pages.dev',
	appDescription: 'A decentralized content platform built on Sui blockchain',

	// Smart Contracts
	ocpPackageId: '',
	ocpCreatorModule: 'ocp_creator',
	ocpPostModule: 'ocp_post',
	ocpMemberModule: 'ocp_member',
	ocpSubscriberModule: 'ocp_subscriber',
	ocpPaidModule: 'ocp_paid',

	// Analytics
	googleAnalyticsId: '',
	plausibleDomain: '',

	// Feature Flags
	enableDarkMode: true,
	enableAnalytics: false,
	enableNotifications: true,

	// Development
	devMode: false
};

// Get configuration from environment variables
export const config = {
	// Sui Network
	suiNetwork: env.PUBLIC_SUI_NETWORK || defaultConfig.suiNetwork,
	suiRpcUrl: env.PUBLIC_SUI_RPC_URL || defaultConfig.suiRpcUrl,

	// Application
	appName: env.PUBLIC_APP_NAME || defaultConfig.appName,
	appUrl: env.PUBLIC_APP_URL || defaultConfig.appUrl,
	appDescription: env.PUBLIC_APP_DESCRIPTION || defaultConfig.appDescription,

	// Smart Contracts
	ocpPackageId: env.PUBLIC_OCP_PACKAGE_ID || defaultConfig.ocpPackageId,
	ocpCreatorModule: env.PUBLIC_OCP_CREATOR_MODULE || defaultConfig.ocpCreatorModule,
	ocpPostModule: env.PUBLIC_OCP_POST_MODULE || defaultConfig.ocpPostModule,
	ocpMemberModule: env.PUBLIC_OCP_MEMBER_MODULE || defaultConfig.ocpMemberModule,
	ocpSubscriberModule: env.PUBLIC_OCP_SUBSCRIBER_MODULE || defaultConfig.ocpSubscriberModule,
	ocpPaidModule: env.PUBLIC_OCP_PAID_MODULE || defaultConfig.ocpPaidModule,

	// Analytics
	googleAnalyticsId: env.PUBLIC_GOOGLE_ANALYTICS_ID || defaultConfig.googleAnalyticsId,
	plausibleDomain: env.PUBLIC_PLAUSIBLE_DOMAIN || defaultConfig.plausibleDomain,

	// Feature Flags
	enableDarkMode: env.PUBLIC_ENABLE_DARK_MODE === 'true' || defaultConfig.enableDarkMode,
	enableAnalytics: env.PUBLIC_ENABLE_ANALYTICS === 'true' || defaultConfig.enableAnalytics,
	enableNotifications:
		env.PUBLIC_ENABLE_NOTIFICATIONS === 'true' || defaultConfig.enableNotifications,

	// Development
	devMode: dev || defaultConfig.devMode,

	// Runtime environment
	isBrowser: browser,
	isProduction: !dev
};

// Sui client configuration
export const getSuiClientConfig = () => ({
	url: config.suiRpcUrl,
	network: config.suiNetwork as 'testnet' | 'mainnet' | 'devnet' | 'localnet'
});

// Contract addresses helper
export const getContractConfig = () => ({
	packageId: config.ocpPackageId,
	modules: {
		creator: config.ocpCreatorModule,
		post: config.ocpPostModule,
		member: config.ocpMemberModule,
		subscriber: config.ocpSubscriberModule,
		paid: config.ocpPaidModule
	}
});

// Analytics configuration
export const getAnalyticsConfig = () => ({
	enabled: config.enableAnalytics,
	googleAnalyticsId: config.googleAnalyticsId,
	plausibleDomain: config.plausibleDomain
});

// Feature flags
export const features = {
	darkMode: config.enableDarkMode,
	analytics: config.enableAnalytics,
	notifications: config.enableNotifications
};

// Development helpers
export const isDev = config.devMode;
export const isProd = config.isProduction;

// Export default config for convenience
export default config;
