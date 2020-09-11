import * as actions from '../../actions/articleActions'
import * as types from '../../constants/ActionTypes'

describe('article action tests', () => {
  it('should create an action to set current article', () => {
    const expectedAction = {
      type: types.SET_CURRENT_ARTICLE
    }
    expect(actions.setCurrentArticle()).toEqual(expectedAction)
  })
})