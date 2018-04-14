import development from './dev';
import { EnvironmentSchema } from './schema';

export const port = 8013;
export const host = `http://localhost:${port}`;

/**
 * Environment: e2e
 */
const env: EnvironmentSchema = {
  // Start with development config,
  ...development,
  // override for e2e testing:
  name: 'e2e',
  enableAnimations: false,
  ratesAPI: {
    btc: 'https://rates.viacoin.org/api/rates',
    bch: `${host}/bitpay.com/api/rates/bch`
  },
  activateScanner: false
};

export default env;
