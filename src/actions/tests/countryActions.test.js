import * as actions from '../../actions/countryActions'
import * as types from '../../constants/ActionTypes'

describe('country actions tests', () => {
  it('should create an action to set current country', () => {
    const expectedAction = {
      type: types.SET_COUNTRY
    }
    expect(actions.setCountry()).toEqual(expectedAction)
  })
  it('should create an action to disable country selection', () => {
    const expectedAction = {
      type: types.DISABLE_COUNTRY_SELECTION
    }
    expect(actions.disableCountrySelection()).toEqual(expectedAction)
  })
})