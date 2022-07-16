import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import { SearchBar } from './components/search/SearchBar';
import { UserSection } from './components/user-section/UserSection';
import './App.css'

function App() {
    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <SearchBar />
                    
                    <UserSection/>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
