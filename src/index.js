import Cron from 'cron';
import { bump } from './bump';

const { CRON_INTERVAL_MINUTES = 5 } = process.env;
const EVERY_FIVE_MINUTES_CRON = `*/${CRON_INTERVAL_MINUTES} * * * *`;

const main = async () => {
  console.log('Trying to first call');
  try {
    await bump();
  } catch (e) {
    console.error('Ooops', e);
    return;
  }
  console.log(`Nice! Starting cron job with interval ${CRON_INTERVAL_MINUTES} minutes`);
  // eslint-disable-next-line no-unused-vars
  const job = new Cron.CronJob(EVERY_FIVE_MINUTES_CRON, bump, null, true, 'Europe/Moscow');
};

main();
