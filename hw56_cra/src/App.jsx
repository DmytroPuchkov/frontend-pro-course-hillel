import './App.css';

const title = {
  header: 'Header',
  sidebar: 'Sidebar',
  main: 'Main',
  footer: 'Footer',
  button: 'Button'
}

const styleBtnPrimary = {
  padding: '24px 48px',
  border: '0',
  backgroundColor: 'fuchsia',
  color: 'white'
}

const button = <button style={styleBtnPrimary}>{title.button}</button>

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-contant">
        <Sidebar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header content-center font-primary p24">
      <p>
        {title.header}
      </p>
    </header>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar font-primary p24">
      <p>
        {title.sidebar}
      </p>
    </nav>
  );
};

const MainContainer = () => {
  return (
    <div className="main-container font-primary p24">
      <p>
        {title.main}
      </p>
      {button}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer content-center font-primary p24">
      <p>
        {title.footer}
      </p>
    </footer>
  );
};

export default App;
