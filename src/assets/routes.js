import Home from './component/home'
import Header from './component/header'
import Stocks from './component/stocks/stocks'
import Portfolio from './component/portfolio/portfolio'
export const routes = [
    {path : '/', component : Home},
    {path : '/header', component : Header},
    {path : '/stocks', component : Stocks},
    {path : '/portfolio', component : Portfolio}

];