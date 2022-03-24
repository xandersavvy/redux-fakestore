import Header from './containers/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Error404 from './containers/Error404';

function App() {
  return (
    <>
     <Router>
     <Header />
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route exact path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
