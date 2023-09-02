interface EthValidatorPerformanceData {
  status: string;
  data: {
    balance: number;
    performance1d: number;
    performance31d: number;
    performance365d: number;
    performance7d: number;
    performancetoday: number;
    performancetotal: number;
    rank7d: number;
    validatorindex: number;
  }[];
}
const ETH_VALIDATOR_PERFORMANCE_URL = 'https://beaconcha.in/api/v1/validator/402418/performance';

export const fetchEthValidatorTotalPerformance = async () => {
  try {
    const data = await fetch(ETH_VALIDATOR_PERFORMANCE_URL);
    const ethValidatorData: EthValidatorPerformanceData = await data.json();
    if (ethValidatorData.status !== 'OK') {
      return null;
    }
    return {
      totalPerformanceWei: ethValidatorData.data[0].performancetotal,
    };
  } catch (e) {
    console.error('> fetchEthValidatorTotalPerformance', e);
  }
};
