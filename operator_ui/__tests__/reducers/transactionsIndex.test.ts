// import { partialAsFull } from '@chainlink/ts-test-helpers'
import reducer, { INITIAL_STATE } from '../../src/reducers'
// import { UpsertTransactionsAction } from '../../src/reducers/actions'

describe('reducers/transactionsIndex', () => {
  it('UPSERT_TRANSACTIONS updates the current page & count from meta', () => {
    const action = {
      type: 'UPSERT_TRANSACTIONS',
      data: {
        meta: {
          currentPageTransactions: {
            data: [{ id: 'b' }, { id: 'a' }],
            meta: {
              count: 10,
            },
          },
        },
      },
    }
    const state = reducer(INITIAL_STATE, action)

    expect(state.transactionsIndex.count).toEqual(10)
    expect(state.transactionsIndex.currentPage).toEqual(['b', 'a'])
  })
})
