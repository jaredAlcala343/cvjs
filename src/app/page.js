// Importar los módulos específicos desde la carpeta 'pages'
import Profile from '../../pages/profile';
import Portafolio from '../../pages/portafolio';
import Header from '../../pages/header';
import Footer from '../../pages/footer';
import Contact from '../../pages/contact';

// Ejemplo de uso de los módulos importados
function App() {
    return (
        <div>
            <Header />
            <Profile />
            <Portafolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;