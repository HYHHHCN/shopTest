<template>
  <div>
    <!-- 三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>

  </div>
</template>

<script>
import ListContainer from '@//pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'


export default {
components:{
  ListContainer,
  Recommend,
  Rank,
  Like,
  Floor,
  Brand
},

methods:{
  addEvent(){
    this.$store.dispatch('add')
  }
}
}
</script>

<style>

</style>