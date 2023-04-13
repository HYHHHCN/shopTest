import {reqCategoryList} from "@/api";

const state={
    categoryLists:[]
};
const actions={
   async categoryList({commit}){
    // await用于获取promise的result
       const req=await reqCategoryList()
       if(req.code==200){
        commit('CATEGORYLIST',req.data)
       }
    }
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryLists=categoryList
    }
};
const getters={}
export default{
    state,
    actions,
    mutations,
    getters
}