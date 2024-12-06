import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { ReactNode } from 'react';
import '@mysten/dapp-kit/dist/index.css';

const queryClient = new QueryClient();
const networks = {
    devnet: { url: getFullnodeUrl('devnet') },
    mainnet: { url: getFullnodeUrl('mainnet') },
};
const Provider = (props: {
    children: ReactNode
}) => {
    return <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networks} defaultNetwork="devnet">
            <WalletProvider>
                {props.children}
            </WalletProvider>
        </SuiClientProvider>
    </QueryClientProvider>
}

export default Provider;