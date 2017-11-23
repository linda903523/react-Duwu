import {combineReducers} from 'redux';
import home from '../components/home/HomeReducer.js';
import chose from '../components/chose/ChoseReducer.js';
import loadmore from '../components/loadmore/LoadmoreReducer.js';
import search from '../components/search/SearchReducer.js';
import result from '../components/result/ResultReducer.js';
import shopping from '../components/shopping/ShoppingReducer.js';
import detail from '../components/detail/DetailReducer.js';
import my from '../components/my/MyReducer';
import order from '../components/Order/OrderReducer';
import evaluate from '../components/evaluate/evaluateReducer';
import all from '../components/all/allReducer';
import cawait from '../components/cawait/cawaitReducer';
import buycar from '../components/buycar/buycarReducer';
import ListOrder from '../components/listOrder/ListOrderReducer';
import shipments from '../components/shipments/shipmentsReducer';
import receiving from '../components/receiving/receivingReducer';

export default combineReducers({
    home,
    chose,
    loadmore,
    search,
    result,
    shopping,
    detail,
    my,
    all,
    order,
    evaluate,
    cawait,
    buycar,
    ListOrder,
    shipments,
    receiving
})