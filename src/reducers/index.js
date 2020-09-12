import { combineReducers } from 'redux'
import { articleReducer }from './articleReducer'
import { topNewsReducer } from './topNewsReducer'
import { categoryReducer } from './categoryReducer'
import { searchReducer } from './searchReducer'
import { countryReducer } from './countryReducer'

export default combineReducers({
    country: countryReducer,
    article: articleReducer,
    topNewsReducer: topNewsReducer,
    category: categoryReducer,
    search: searchReducer
})