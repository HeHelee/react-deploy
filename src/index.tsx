import '@/styles';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
<<<<<<< HEAD
<<<<<<< HEAD

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
=======
=======

async function deferRender() {
  if (process.env.REACT_APP_RUN_MSW === 'true') {
    const { worker } = await import('./mocks/browser');
    await worker.start();
  }

  return;
}

deferRender().then(() => {
>>>>>>> upstream/hehelee
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
<<<<<<< HEAD

>>>>>>> 9fc38c008ccc8550a44151a08744a569411c2258
=======
});
>>>>>>> upstream/hehelee
