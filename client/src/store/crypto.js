import { useQuery } from '@tanstack/react-query';
import { api } from './api';

// Coin API endpoint config
const coinPaths = {
  bitcoin: 'Bitcoin/0x0000000000000000000000000000000000000000',
  ethereum: 'Ethereum/0x0000000000000000000000000000000000000000',
  solana: 'Solana/0x0000000000000000000000000000000000000000',
  xrp: 'XRPL/0x0000000000000000000000000000000000000000',
  usdc: 'Ethereum/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  dogecoin: 'Dogechain/0x0000000000000000000000000000000000000000',
  bnbcoin: 'BinanceSmartChain/0x0000000000000000000000000000000000000000',
  suicoin: 'Sui/0x2::sui::SUI',
};

// Generic fetch function
const fetchCoinData = async (key) => {
  const path = coinPaths[key];
  const response = await api.get(path);
  return response.data;
};

// Generic hook factory
const createCoinHook = (key) => () =>
  useQuery({
    queryKey: [key],
    queryFn: () => fetchCoinData(key),
  });

// Exported individual hooks
export const useBitcoin = createCoinHook('bitcoin');
export const useEthereum = createCoinHook('ethereum');
export const useSolana = createCoinHook('solana');
export const useXRP = createCoinHook('xrp');
export const useUSDC = createCoinHook('usdc');
export const useDogecoin = createCoinHook('dogecoin');
export const useBnbcoin = createCoinHook('bnbcoin');
export const useSuicoin = createCoinHook('suicoin');
