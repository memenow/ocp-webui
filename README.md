# Open Content Protocol - Web UI

A modern, decentralized content platform frontend built with SvelteKit and deployed on Cloudflare Pages. This application provides a user-friendly interface for the Open Content Protocol, enabling creators and users to interact with blockchain-based content in a censorship-resistant environment.

## 🌟 Features

- **Decentralized Content Platform**: Built on Sui blockchain for censorship resistance
- **Creator Economy**: Support for content creators with subscription and membership models
- **Wallet Integration**: Seamless connection with Sui wallets
- **Responsive Design**: Modern UI that works across all devices
- **Dark Mode Support**: Automatic dark/light theme switching
- **Real-time Updates**: Dynamic content loading and state management
- **Access Control**: Tiered content access (Public, Subscriber, Member)

## 🚀 Technology Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Modern web framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Blockchain**: [Sui](https://sui.io/) - High-performance blockchain platform
- **SDK**: [@mysten/sui](https://www.npmjs.com/package/@mysten/sui) - Sui TypeScript SDK
- **Icons**: [Lucide Svelte](https://lucide.dev/) - Beautiful icon library
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) - Edge deployment platform
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (version 8 or higher)
- A Sui wallet extension (e.g., Sui Wallet, Suiet)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/memenow/ocp-webui.git
   cd ocp-webui
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   pnpm run setup:env
   ```

   Edit `.env.local` with your configuration values.

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 🏗️ Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable Svelte components
│   │   ├── Header.svelte   # Navigation header
│   │   └── WalletConnect.svelte # Wallet connection component
│   ├── stores/             # Svelte stores for state management
│   │   └── wallet.ts       # Wallet connection state
│   ├── types/              # TypeScript type definitions
│   │   └── ocp.ts          # Open Content Protocol types
│   └── config.ts           # Application configuration
├── routes/                 # SvelteKit routes (pages)
│   ├── +layout.svelte      # Root layout component
│   ├── +page.svelte        # Home page
│   ├── creators/           # Creator discovery page
│   ├── posts/              # Content browsing page
│   └── dashboard/          # User dashboard
├── app.html                # HTML template
├── app.css                 # Global styles
└── app.d.ts                # TypeScript declarations
```

## 🔧 Configuration

### Environment Variables

The application uses environment variables for configuration. Copy `.env.example` to `.env.local` for local development:

```bash
pnpm run setup:env
```

#### Key Environment Variables

```env
# Sui Network Configuration
PUBLIC_SUI_NETWORK=testnet
PUBLIC_SUI_RPC_URL=https://fullnode.testnet.sui.io:443

# Application Configuration
PUBLIC_APP_NAME="Open Content Protocol"
PUBLIC_APP_URL=https://ocp.memenow.xyz
PUBLIC_APP_DESCRIPTION="A decentralized content platform built on Sui blockchain"

# Smart Contract Configuration
PUBLIC_OCP_PACKAGE_ID=0x...
PUBLIC_OCP_CREATOR_MODULE=ocp_creator
PUBLIC_OCP_POST_MODULE=ocp_post
PUBLIC_OCP_MEMBER_MODULE=ocp_member
PUBLIC_OCP_SUBSCRIBER_MODULE=ocp_subscriber
PUBLIC_OCP_PAID_MODULE=ocp_paid

# Feature Flags
PUBLIC_ENABLE_DARK_MODE=true
PUBLIC_ENABLE_ANALYTICS=false
PUBLIC_ENABLE_NOTIFICATIONS=true
```

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run TypeScript checks
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run unit tests
- `pnpm setup:env` - Copy environment variables template

## 🚀 Deployment

### GitHub Actions (Recommended)

The project uses GitHub Actions for automated deployment to Cloudflare Pages:

1. **Fork or clone the repository** to your GitHub account

2. **Set up repository secrets** in GitHub:

   - Go to your repository settings
   - Navigate to **Secrets and variables** > **Actions**
   - Add the following secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

3. **Configure repository variables** (optional):

   - In the same section, go to **Variables** tab
   - Add any environment variables you want to override:
     - `PUBLIC_SUI_NETWORK`
     - `PUBLIC_APP_URL`
     - `PUBLIC_OCP_PACKAGE_ID`
     - etc.

4. **Deploy automatically**:
   - Push to the `main` branch to trigger deployment
   - Pull requests will create preview deployments

### Getting Cloudflare Credentials

1. **API Token**:

   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Create a custom token with:
     - Permissions: `Cloudflare Pages:Edit`
     - Account resources: `Include - Your Account`

2. **Account ID**:
   - Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Copy the Account ID from the right sidebar

## 🔗 Integration with Open Content Protocol

This frontend integrates with the [Open Content Protocol](https://github.com/BillDuke13/open-content-protocol) smart contracts on the Sui blockchain:

### Smart Contract Functions

- **Creator Management**: Create and update creator profiles
- **Content Publishing**: Mint and manage posts with access controls
- **Subscription System**: Handle memberships and subscriber relationships
- **Payment Processing**: Manage SUI token transactions
- **Access Control**: Verify user permissions for content access

### Blockchain Interactions

The application uses the Sui TypeScript SDK to:

- Connect to Sui wallets
- Query blockchain state
- Submit transactions
- Handle smart contract calls

## 🎯 Usage

### For Content Creators

1. **Connect Wallet**: Use the "Connect Wallet" button in the header
2. **Create Profile**: Set up your creator profile with description and pricing
3. **Publish Content**: Create posts with different access levels
4. **Manage Subscribers**: Track and manage your audience
5. **Monitor Earnings**: View analytics and payment history

### For Content Consumers

1. **Browse Creators**: Discover creators on the platform
2. **View Content**: Access free content or subscribe for premium
3. **Manage Subscriptions**: Track your subscriptions and memberships
4. **Support Creators**: Subscribe or purchase memberships

## 🛡️ Security

- **Wallet Security**: All transactions require user approval
- **Access Control**: Smart contract-enforced content permissions
- **Data Privacy**: Minimal data collection, blockchain-based identity
- **Censorship Resistance**: Decentralized content storage

## 🤝 Contributing

We welcome contributions to improve the Open Content Protocol Web UI! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [https://ocp-webui.pages.dev](https://ocp-webui.pages.dev)
- **Backend Repository**: [Open Content Protocol](https://github.com/BillDuke13/open-content-protocol)
- **Sui Documentation**: [https://docs.sui.io](https://docs.sui.io)
- **SvelteKit Documentation**: [https://kit.svelte.dev](https://kit.svelte.dev)
- **Cloudflare Pages**: [https://pages.cloudflare.com](https://pages.cloudflare.com)

## 📞 Support

If you encounter any issues or have questions:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Join our community** discussions

## 🙏 Acknowledgments

- **Sui Foundation** for the blockchain infrastructure
- **Svelte Team** for the amazing framework
- **Cloudflare** for the deployment platform
- **Open Source Community** for the tools and libraries

---

Built with ❤️ for the decentralized web
