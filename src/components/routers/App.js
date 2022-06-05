import React, {Suspense} from 'react';
import { CartProvider } from 'react-use-cart'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../pages/Nav'
import Card from '../pages/Card'
import Home from '../pages/Home'
import BestProduct from '../pages/BestProduct'
import About from '../pages/About'
import DeliveryTime from '../pages/DeliveryTime'
import Blog from '../pages/Blog'
import OurMenu from '../pages/OurMenu'
import Footer from '../pages/Footer'
import BlogDetailsPage from '../pages/BlogDetailsPage'
import Product1 from '../pages/Product1.js'

const loadingMarkup=(
    <div className="py-4 text-center">
        <h2>Loading..</h2>
    </div>
)

const AppRouter = () => {
    return (
        <Suspense fallback={loadingMarkup}>
        <BrowserRouter>
        <Switch>
            <CartProvider>
                <Nav/>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/ourmenu" component={OurMenu}></Route>
                <Route path="/card" component={Card}></Route>
                <Route path="/bestproduct" component={BestProduct}></Route>
                <Route path="/deliverytime" component={DeliveryTime}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
                <Route path="/product1" component={Product1}></Route>
                <Footer/>
            </CartProvider>
        </Switch>
        </BrowserRouter>
        </Suspense>
    )
}

export default AppRouter
