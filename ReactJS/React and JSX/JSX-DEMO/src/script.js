const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement(
//     'header', { className: 'site-header' },
//     React.createElement('h1', {}, 'Hello from React!')
// );

const reactElement = (
    <header className='site-header'> 
        <h1>Hello from JSX!!!</h1>
    </header>
);

     root.render(reactElement);