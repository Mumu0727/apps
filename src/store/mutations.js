import * as types from './types';

export default {
  [types.VIEW_NAV] : (state,payload) => state.bNav = payload ,
  [types.VIEW_FOOT] : (state,payload) => state.bFoot = payload ,
  // [types.VIEW_BANNER] : (state,payload) => state.banner = payload,
  [types.VIEW_LIST] : (state,payload) => state.list = payload,
  [types.VIEW_DETAIL] : (state,payload) => state.detail = payload,
  [types.UPDATA_USER] : (state,payload) => state.user = payload,
  [types.LOGOUT] : (state,payload) => state.user = logout,
  [types.LOGIN] : (state,payload) => state.user = login,

}