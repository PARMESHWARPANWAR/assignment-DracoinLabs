import { createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const injectedConnector = injected();

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [injectedConnector],
  transports: {
    [sepolia.id]: http(),
  },
});
