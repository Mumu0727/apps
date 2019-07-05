// this=={}
// import axios from 'axios';
import axios from './../plugins/axios'
import {
  VIEW_NAV,
  VIEW_FOOT,
  VIEW_LIST,
  VIEW_DETAIL,
  UPDATA_USER,
  LOGOUT,
  LOGIN

  // VIEW_BANNER

} from './types'

export default {

  [VIEW_NAV] : ({state,commit},payload) => commit(VIEW_NAV,payload),

  [VIEW_FOOT] : ({state,commit},payload) => commit(VIEW_FOOT,payload),

  [VIEW_LIST] : async ({state,commit},payload)=> {
    let res = await axios({url:'m_v1/statics/getzx.htm',
      params:{topicId:1165,pageNum:payload}
    })
    // console.log(res.data.promoList)
    commit(VIEW_LIST,res.data.promoList)
  },
  [VIEW_DETAIL] : async ({state,commit},payload)=> {
    let res = await axios({url:`m_v1/goods/detailPromo/${payload}`,
    method: 'post'
    })
    commit(VIEW_DETAIL,res.data.productPromo)
  },
  [UPDATA_USER] : async ({state,commit},payload)=> {
    let res = await axios({url:'mumu/user',
    method: 'get'
    })
    if(res.data.err===1){
      commit(UPDATA_USER,false)
    }else{
      commit(UPDATA_USER,res.data.data)
    }
  },
  [LOGOUT] : async ({state,commit},payload) => {
    let res = await axios({url:'mumu/logout',
      method: 'put'
    })
  },


  
 

  // [VIEW_BANNER] : async ({state,commit},payload)=> {
  //   let res = await axios({url:'m_v1/statics/getzx.htm',
  //     params:{topicId:1165,pageNum:1}
  //   })
    // commit(VIEW_BANNER,res.data.data.home[0].bannerList)
  //   console.log(res)
  // }

  
}