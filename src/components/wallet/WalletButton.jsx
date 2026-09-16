import { useConnection, useConnect, useDisconnect } from 'wagmi';
import { injectedConnector } from '../../config/wagmi';

function truncateAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function WalletButton({ className, children }) {
  const { address, isConnected } = useConnection();
  const connect = useConnect();
  const disconnect = useDisconnect();

  if (isConnected) {
    return (
      <button className={className} onClick={() => disconnect.mutate()}>
        {truncateAddress(address)}
      </button>
    );
  }

  return (
    <button
      className={className}
      disabled={connect.isPending}
      onClick={() => connect.mutate({ connector: injectedConnector })}
      title={connect.error?.message}
    >
      {connect.isPending ? 'Connecting...' : children || 'Connect'}
    </button>
  );
}

export default WalletButton;
