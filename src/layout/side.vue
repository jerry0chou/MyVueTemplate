<template>
  <vue-position-sticky sticky-class="sticky-class">
    <!--<vue-scroll :ops="ops">-->
    <el-aside id="side" width="180px">
      <!-- menu -->
      <vue-scroll >
      <el-menu :default-active="$route.name" :default-openeds="defaultOpeneds" background-color="#304156"
               text-color="#bfcbd9" active-text-color="#42b983">
        <my-side-item :json="filterRoutes"></my-side-item>
      </el-menu>
      </vue-scroll>
    </el-aside>
    <!--</vue-scroll>-->
  </vue-position-sticky>
</template>
<script>
  import {sideRoutes} from '@/router'

  export default {
    name: 'my-side',
    data()
    {
      return {
        filterRoutes: [], // 过滤后的路由
        defaultOpeneds: [], // 默认打开的二级菜单,
        // ops: {
        //     // some configs....
        //   }
      }
    },
    created()
    {
      this.filterRoutes = this.handleRoutes(sideRoutes)
    },
    methods: {
      // 递归过滤路由
      handleRoutes(Arr)
      {
        const Routes = Arr.filter(route =>
        {
          if (route.name)
          {
            if (route.meta)
            {
              // 控制根据权限来渲染路由
              // 应该写一个函数 这里有两个角色可以控制 admin user
              if (route.meta.role !== 'user')
              {
                return false
              }

              else if (route.meta.hidden)
              {
                return false
              } else
              {
                if (route.meta.open)
                {
                  this.defaultOpeneds.push(route.name)
                }
              }
            }
            if (route.children)
            {
              route.children = this.handleRoutes(route.children)
            }
            return true
          } else
          {
            return false
          }
        })
        return Routes
      }
    }
  }
</script>
<style lang='stylus'>
  .sticky-class {
    height: 100%;
  }

  #side {
    display: flex;
    flex-direction: column;
    height: 100%;
    user-select: none;
    background-color #304156;
    .el-menu {
      flex-grow: 1;
      padding-bottom: 15px;
      border: none;
      .el-menu-item {
        min-width: 180px;
      }
    }
  }
</style>
