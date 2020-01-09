import reducer from '../../src/reducers'

describe('reducers/transactions', () => {
  it('UPSERT_TRANSACTIONS upserts items', () => {
    const action = {
      type: 'UPSERT_TRANSACTIONS',
      data: {
        transactions: {
          a: { id: 'a' },
          b: { id: 'b' },
        },
        meta: {
          currentPageTransactions: {
            data: [],
            meta: {},
          },
        },
      },
    }
    const state = reducer(undefined, action)

    expect(state.transactions.items).toEqual({
      a: { id: 'a' },
      b: { id: 'b' },
    })
  })

  it('UPSERT_TRANSACTION upserts items', () => {
    const action = {
      type: 'UPSERT_TRANSACTION',
      data: {
        transactions: {
          a: { id: 'a' },
        },
      },
    }
    const state = reducer(undefined, action)

    expect(state.transactions.items).toEqual({ a: { id: 'a' } })
  })
})
