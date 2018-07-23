<template>
  <div class="layout">
    <Header :style="{background: 'white',borderBottom:'1px solid #e6e7e8',padding:'0',overflow:'hidden'}" >
      <!--<div :style="{background: '#18769f',borderBottom:'1px solid #e6e7e8',paddingLeft:'25px',color:'white',overflow:'hidden',float: 'left',width:'25.2%'}">-->
      <div :style="{background: '#18769f',borderBottom:'1px solid #e6e7e8',paddingLeft:'25px',color:'white',overflow:'hidden',float: 'left',width:'280px'}">
        <div :style="{width:'35%',float: 'left'}">
          <!--<Icon type="ios-navigate"></Icon>-->
          <Avatar icon="person" size="large" />
        </div>
        <div :style="{width:'60%',float: 'left',color:'#e4e5e7'}">
          <p :style="{lineHeight: '20px',paddingTop: '13px'}">名字</p>
          <p :style="{lineHeight: '20px',paddingTop: '5px'}">职位职位职位</p>
        </div>
      </div>
      <div :style="{float: 'left'}">
        <div :style="{height:'36px',display:'flex'}">
          <Icon type="android-options" size="17" :style="{margin:'10px 25px'}"></Icon>
          <Icon type="ios-world" size="20" :style="{margin:'7px 25px'}"></Icon>
          <Icon type="ios-refresh-empty" size="26" :style="{margin:'6px 25px'}"></Icon>
        </div>
        <div :style="{height:'28px'}">
          <Menu mode="horizontal" theme="light" active-name="1" :style="{height:'28px',lineHeight:'28px'}">
            <span :style="{float:'left',color:'#495060',padding:'0 40px 0 10px'}">‹‹ </span>
            <MenuItem name="1" :style="{fontSize:'12px'}">库存</MenuItem>
            <MenuItem name="2" :style="{fontSize:'12px'}">入库</MenuItem>
            <MenuItem name="3" :style="{fontSize:'12px'}">出库</MenuItem>
          </Menu>
        </div>
      </div>
    </Header>
    <Layout :style="{minHeight: '91vh'}">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <div :style="{background: '#32353f', padding: '14px 24px'}">
          <Icon @click.native="collapsedSider" :class="rotateIcon"  type="navicon-round" size="16" :style="{color:'rgba(255, 255, 255, 0.7)'}"></Icon>
        </div>
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Sider :style="{background: '#e7e9ed'}">
        <Menu active-name="1-1" theme="light" width="auto" :class="menuitemClasses" :style="{background: '#e7e9ed'}">
          <MenuGroup title="管理平台">
            <MenuItem name="1-1">
              <router-link to="/index/content">项目管理</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <router-link to="/index/content">采购管理</router-link>
            </MenuItem>
            <MenuItem name="1-3">
              <router-link to="/index/content">财务管理</router-link>
            </MenuItem>
            <MenuItem name="1-4">
              <router-link to="/index/content">行政管理</router-link>
            </MenuItem>
            <MenuItem name="1-5">
              <router-link to="/index/content">仓储管理</router-link>
            </MenuItem>
          </MenuGroup>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Content :style="{padding: '10px',backgroundColor: '#f9f9f9'}">
          <Card :style="{padding: '0'}">
            <div style="height: 600px"><router-view></router-view></div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      isCollapsed: true
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse();
    }
  }
}
</script>
<style lang="less" src="../styles/index.less"></style>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    /*font-size: 22px;*/
  }
</style>
