import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {getHomePageRequests} from '../actions/homePageRequests';
import {GoShoppingData, Slide} from "../../helpers/types";

interface HomePageState {
    homeSlides: Slide[];
    goShopping: GoShoppingData
    status: string
}

const initialState: HomePageState = {
    homeSlides: [],
// @ts-ignore
    goShopping: {},
    status: 'pending'
};

export default createReducer(initialState, (builder) => {
    builder.addCase(getHomePageRequests.fulfilled, (state, action: PayloadAction<{
        slides: Slide[],
        go_shopping: GoShoppingData
    }>) => {
        state.homeSlides = action.payload.slides;
        state.goShopping = action.payload.go_shopping
        state.status = 'ok'
    })
        .addCase(getHomePageRequests.pending, (state) => {
            state.status = 'pending'
        });
});
