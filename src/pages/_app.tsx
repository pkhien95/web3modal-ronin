import "@/styles/globals.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ronin, mainnet, bsc } from "wagmi/chains";

const chains = [
  ronin,
  mainnet,
  bsc
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata = {
  name: "Next Starter Template",
  description: "A Next.js starter template with Web3Modal v3 + Wagmi",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: ronin,
  featuredWalletIds: ['541d5dcd4ede02f3afaf75bf8e3e4c4f1fb09edb5fa6c4377ebf31c2785d9adf'],
  includeWalletIds: [
    '541d5dcd4ede02f3afaf75bf8e3e4c4f1fb09edb5fa6c4377ebf31c2785d9adf',
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
  ],
  chainImages: {
    2020: 'https://roninchain.com/static/images/logo-on-white.svg'
  }
});

export default function App({Component, pageProps}: AppProps) {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <Component {...pageProps} />
        </WagmiConfig>
      ) : null}
    </>
  );
}
