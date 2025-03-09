import lambdaTunnel from '@lambdatest/node-tunnel';

const tunnelInstance = new lambdaTunnel.Tunnel();

export default async function globalTeardown() {
  return new Promise<void>((resolve, reject) => {
    tunnelInstance.stop((err) => {
      if (err) {
        console.error('Error stopping the tunnel:', err);
        reject(err);
      } else {
        console.log('Tunnel has stopped successfully');
        resolve();
      }
    });
  });
}

