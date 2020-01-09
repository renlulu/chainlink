import React from 'react'
import * as jsonapi from '@chainlink/json-api-client'

/**
 * REDIRECT
 */

export interface RedirectAction {
  type: 'REDIRECT'
  to: string
}

/**
 * MATCH_ROUTE
 */

export interface MatchRouteAction {
  type: 'MATCH_ROUTE'
  match?: {
    url: string
  }
}

/**
 * NOTIFY_SUCCESS
 */

export interface NotifySuccessAction {
  type: 'NOTIFY_SUCCESS'
  component: React.FC<any>
  props: any
}

/**
 * NOTIFY_SUCCESS_MSG
 */

export interface NotifySuccessMsgAction {
  type: 'NOTIFY_SUCCESS_MSG'
  msg: string
}

/**
 * NOTIFY_ERROR
 */

export interface NotifyErrorAction {
  type: 'NOTIFY_ERROR'
  component: React.FC<any>
  error: {
    errors: jsonapi.ErrorItem[]
  }
}

/**
 * NOTIFY_ERROR_MSG
 */

export interface NotifyErrorMsgAction {
  type: 'NOTIFY_ERROR_MSG'
  msg: string
}

/**
 * REQUEST_SIGNIN
 */

export interface RequestSigninAction {
  type: 'REQUEST_SIGNIN'
}

/**
 * RECEIVE_SIGNIN_SUCCESS
 */

export interface ReceiveSigninSuccessAction {
  type: 'RECEIVE_SIGNIN_SUCCESS'
  authenticated: boolean
}

/**
 * RECEIVE_SIGNIN_FAIL
 */

export interface ReceiveSigninFailAction {
  type: 'RECEIVE_SIGNIN_FAIL'
}

/**
 * RECEIVE_SIGNIN_ERROR
 */

export interface ReceiveSigninErrorAction {
  type: 'RECEIVE_SIGNIN_ERROR'
  // TODO: Add typings
  errors: any[]
  networkError: boolean
}

/**
 * REQUEST_SIGNOUT
 */

export interface RequestSignoutAction {
  type: 'REQUEST_SIGNOUT'
}

/**
 * RECEIVE_SIGNOUT_SUCCESS
 */

export interface ReceiveSignoutSuccessAction {
  type: 'RECEIVE_SIGNOUT_SUCCESS'
  authenticated: boolean
}

/**
 * RECEIVE_SIGNOUT_ERROR
 */

export interface ReceiveSignoutErrorAction {
  type: 'RECEIVE_SIGNOUT_ERROR'
  // TODO: Add typings
  errors: any[]
  networkError: boolean
}

/**
 * REQUEST_CREATE
 */

export interface RequestCreateAction {
  type: 'REQUEST_CREATE'
}

/**
 * REQUEST_CREATE_SUCCESS
 */

export interface ReceiveCreateSuccessAction {
  type: 'RECEIVE_CREATE_SUCCESS'
}

/**
 * REQUEST_CREATE_ERROR
 */

export interface ReceiveCreateErrorAction {
  type: 'RECEIVE_CREATE_ERROR'
}

/**
 * REQUEST_DELETE
 */

export interface RequestDeleteAction {
  type: 'REQUEST_DELETE'
}

/**
 * RECEIVE_DELETE_SUCCESS
 */

export interface ReceiveDeleteSuccessAction {
  type: 'RECEIVE_DELETE_SUCCESS'
  id: string
  // TODO: Add type annotations
  response: any
}

/**
 * RECEIVE_DELETE_ERROR
 */

export interface ReceiveDeleteErrorAction {
  type: 'RECEIVE_DELETE_ERROR'
}

/**
 * REQUEST_UPDATE
 */

export interface RequestUpdateAction {
  type: 'REQUEST_UPDATE'
}

/**
 * RECEIVE_UPDATE_SUCCESS
 */

export interface ReceiveUpdateSuccessAction {
  type: 'RECEIVE_UPDATE_SUCCESS'
}

/**
 * RECEIVE_UPDATE_ERROR
 */

export interface ReceiveUpdateErrorAction {
  type: 'RECEIVE_UPDATE_ERROR'
}

/**
 * REQUEST_ACCOUNT_BALANCE
 */

export interface RequestAccountBalanceAction {
  type: 'REQUEST_ACCOUNT_BALANCE'
}

/**
 * UPSERT_ACCOUNT_BALANCE
 */

export interface UpsertAccountBalanceAction {
  type: 'UPSERT_ACCOUNT_BALANCE'
  // TODO: Type data
  data: {
    accountBalances: any
  }
}

/**
 * RESPONSE_ACCOUNT_BALANCE
 */

export interface ResponseAccountBalanceAction {
  type: 'RESPONSE_ACCOUNT_BALANCE'
}

/**
 * UPSERT_BRIDGES
 */

export interface UpsertBridgesAction {
  type: 'UPSERT_BRIDGES'
  data: {
    bridges: { [id: string]: object }
    meta: {
      currentPageBridges: {
        data: { id: string }[]
        meta: { count: number }
      }
    }
  }
}

export interface UpsertBridgeAction {
  type: 'UPSERT_BRIDGE'
  data: { [id: string]: object }
}

// export interface Action {
//   type: ConfigurationActionType.UPSERT
//   data: NormalizedResponse
// }

// enum ConfigurationActionType {
//   UPSERT = 'UPSERT_CONFIGURATION',
// }

// interface NormalizedResponse {
//   configWhitelists: Record<string, Attributes>
// }
// interface Attributes {
//   attributes: Record<string, Attribute>
// }

export type ConfigurationAttribute = string | number | null

export interface UpsertConfigurationAction {
  type: 'UPSERT_CONFIGURATION'
  // TODO: Type normalized JSON-API attributes
  data: {
    configWhitelists: any
  }
}

export interface UpsertJobsAction {
  type: 'UPSERT_JOBS'
  data: {
    // TODO: Add type annotations
    specs: any
    meta: {
      currentPageJobs: {
        data: { id: string }[]
        meta: { count: number }
      }
    }
  }
}

export interface UpsertRecentlyCreatedJobsAction {
  type: 'UPSERT_RECENTLY_CREATED_JOBS'
  data: {
    // TODO: Add type annotations
    specs: any
    meta: {
      recentlyCreatedJobs: {
        data: { id: string }[]
      }
    }
  }
}

export interface UpsertJobAction {
  type: 'UPSERT_JOB'
  // TODO: Add type annotations
  data: any
}

export interface UpsertJobRunsAction {
  type: 'UPSERT_JOB_RUNS'
  // TODO: Add type annotations
  data: {
    runs: any
    meta: {
      currentPageJobRuns: {
        data: { id: string }[]
        meta: {
          count: number
        }
      }
    }
  }
}

export interface UpsertRecentJobRunsAction {
  type: 'UPSERT_RECENT_JOB_RUNS'
  data: {
    meta: {
      recentJobRuns: {
        data: { id: string }[]
        meta: {
          count: number
        }
      }
    }
  }
}

export interface UpsertJobRunAction {
  type: 'UPSERT_JOB_RUN'
  // TODO: Add type annotations
  data: any
}

export interface UpsertTransactionsAction {
  type: 'UPSERT_TRANSACTIONS'
  data: {
    // TODO: Add typings
    transactions: any
    meta: {
      currentPageTransactions: {
        data: { id: string }[]
        meta: {
          count: number
        }
      }
    }
  }
}

export interface UpsertTransactionAction {
  type: 'UPSERT_TRANSACTION'
  data: {
    // TODO: Add typings
    transactions: any
  }
}

export type Actions =
  | RedirectAction
  | MatchRouteAction
  | NotifySuccessAction
  | NotifySuccessMsgAction
  | NotifyErrorAction
  | NotifyErrorMsgAction
  | RequestSigninAction
  | ReceiveSigninSuccessAction
  | ReceiveSigninFailAction
  | ReceiveSigninErrorAction
  | RequestSignoutAction
  | ReceiveSignoutSuccessAction
  | ReceiveSignoutErrorAction
  | RequestCreateAction
  | ReceiveCreateSuccessAction
  | ReceiveCreateErrorAction
  | RequestDeleteAction
  | ReceiveDeleteSuccessAction
  | ReceiveDeleteErrorAction
  | RequestUpdateAction
  | ReceiveUpdateSuccessAction
  | ReceiveUpdateErrorAction
  | RequestAccountBalanceAction
  | UpsertAccountBalanceAction
  | ResponseAccountBalanceAction
  | UpsertBridgesAction
  | UpsertBridgeAction
  | UpsertConfigurationAction
  | UpsertJobsAction
  | UpsertRecentlyCreatedJobsAction
  | UpsertJobAction
  | UpsertJobRunsAction
  | UpsertRecentJobRunsAction
  | UpsertJobRunAction
  | UpsertTransactionsAction
  | UpsertTransactionAction

export enum RouterActionType {
  REDIRECT = 'REDIRECT',
  MATCH_ROUTE = 'MATCH_ROUTE',
}
