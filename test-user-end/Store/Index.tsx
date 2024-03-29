import {stepperStore} from './Stepper';
import {configureStore} from '@reduxjs/toolkit'
import store from './Modal';
import util from "./Utils";
import  auth from  "./Auth"
import currency from "./Currency";
import payout from "./Payout";
import notification from './Notification'
import ChatRoom from './ChatRoom';
import Message from './Message';
import Order from './Order';
import Filter from './filter';
import cineNames from './CineNames'
import recentProduct from './RecentProduct'
import cineLikeSlice from './CineNameLike'
import cineShareSlice from './CineNameShare'
import userWishlistSlice from './UserWishList'
const Store = configureStore({
    reducer: {
        stepper: stepperStore,
        modal:store,
        util,
        auth,
        currency,
        payout,
        notification,
        ChatRoom,
        Message,
        Order,
        Filter,
        cineNames,
        recentProduct,
        cineLikeSlice,
        cineShareSlice,
        userWishlistSlice
    }
})
export  default Store;

export type RootState = ReturnType<typeof Store.getState>