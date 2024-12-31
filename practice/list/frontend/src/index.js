const {createRoot} = require('react-dom/client');

const App = require('./app');

const root = createRoot(document.getElementById('react-app-list'));

root.render(<App/>);
