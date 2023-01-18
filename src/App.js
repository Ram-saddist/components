import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Products from './Products'

class App extends React.Component{
  state={
    products:[
      {id:1,name:"redmi",price:12,pic:"https://i01.appmifile.com/webfile/globalimg/in/cms/303D1336-249C-0113-DA94-01ED533069F8.jpg"},
      {id:2,name:"realme",price:34,pic:"https://image01.realme.net/general/20220402/1648889532750.png"},
      {id:3,name:"iphone",price:67,pic:"https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Max-Mobile-Phone-493177798-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzk2N3xpbWFnZS9qcGVnfGltYWdlcy9oZDQvaDAzLzk4OTA3MjgyNDczMjYuanBnfGM1ZDU5NmEyOTUzZmZkMWViODBhZDQzODdjM2E3ZmEzOWZmYzA3NzliNDNhNDgxZGE4NTk5YzY5NDIyZmExYWE"}
    ]
  }
  render(){
    return (
        <div>
          <BrowserRouter>
            <Navigation/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/products" element={<Products products={this.state.products}/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
