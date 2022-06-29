const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const reactElement = React.createElement(
    'header', { className: 'site-header' },
    React.createElement('h1', {}, 'Hello from React!')
);

root.render(reactElement);