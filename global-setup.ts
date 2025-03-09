import lambdaTunnel from '@lambdatest/node-tunnel';

const tunnelInstance = new lambdaTunnel.Tunnel();

const tunnelArguments: Record<string, any> = {
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  tunnelName: "Vaneet"
};

export default async function globalSetup() {
  return new Promise<void>((resolve, reject) => {
    tunnelInstance.start(tunnelArguments, (err?: Error) => {
      if (err) {
        console.error('Error starting tunnel:', err);
        reject(err);
      } else {
        console.log('Tunnel is Running Successfully');
        resolve();
      }
    });
  });
}
