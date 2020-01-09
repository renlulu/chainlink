import reducer, { INITIAL_STATE } from '../../src/reducers'

describe('reducers/configuration', () => {
  it('UPSERT_CONFIGURATION sets the config attributes', () => {
    const response = {
      configWhitelists: {
        idA: { attributes: { attributeA: 'ValueA' } },
      },
    }
    const action = {
      type: 'UPSERT_CONFIGURATION',
      data: response,
    }
    const state = reducer(INITIAL_STATE, action)

    expect(state.configuration.data).toEqual({ attributeA: 'ValueA' })
  })
})
