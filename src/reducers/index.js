import { combineReducers } from 'redux'
import countryReducer from './countryReducer'
import { articleReducer }from './articleReducer'
import { topNewsReducer } from './topNewsReducer'
import { categoryReducer } from './categoryReducer'
import { searchReducer } from './searchReducer'

export default combineReducers({
    country: countryReducer,
    article: articleReducer,
    topNewsReducer: topNewsReducer,
    category: categoryReducer,
    search: searchReducer
})