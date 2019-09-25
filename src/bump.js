import axios from 'axios';

const { VK_ACCESS_TOKEN } = process.env;

export const bump = async () => {
  if (!VK_ACCESS_TOKEN) {
    throw new Error('No access token in env');
  }

  const { data } = await axios.get('https://api.vk.com/method/account.setOnline', {
    params: {
      v: '5.101',
      access_token: VK_ACCESS_TOKEN,
    },
  });

  if (data.error) {
    throw new Error(`Error while requesting VK Api: ${data.error.error_msg}`);
  }
  if (data.response === 1) {
    console.log('Online bumped!');
  }
};
