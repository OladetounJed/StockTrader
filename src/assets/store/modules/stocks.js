import stocks from '../../../data/stocks'
const state = {
    stocks : []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(1 + stock.price  *( 1+ Math.random() - 0.5))
        })
    }
};

const actions = {
    buyStocks :({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks : ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks : ({commit}) => {
        commit('RND_STOCKS')
    }
};

const getters = {
    stocks : state => {
        return state.stocks
    }
};

export default {
    getters,
    mutations,
    actions,
    state
}