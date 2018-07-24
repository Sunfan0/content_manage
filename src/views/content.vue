<template>
  <div>
    <div style="border-bottom:1px solid #e6e7e8;height: 50px;line-height: 50px;padding-left: 30px;">
      <span>当前库房:</span>
      <Select v-model="roomModel" style="width:200px;margin-left: 20px">
        <Option v-for="item in roomList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div style="width:98%;padding: 10px">
      <Table  :columns="columns1" :data="data1" size="small" ref="selection"></Table>
      <div style="border:1px solid #e6e7e8;border-top: 0;height: 50px;line-height: 50px;padding-left: 20px;font-size: 13px">
        <Checkbox v-model="selectAll" @on-change="handleSelectAll()"><span style="font-size: 13px">全选</span></Checkbox>
        <span style="margin-left: 20px">选中项:</span>
        <Icon type="trash-a" color="#f7ab81" size="20" style="vertical-align: sub;margin: 0 5px" @click="handleDelete()"></Icon>删除
        <Icon type="ios-upload-outline" color="#7194c5" size="20" style="vertical-align: sub;margin: 0 5px 0 20px" @click="handleExport()"></Icon>导出
        <Page :total="pageCount" size="small" show-elevator show-sizer :style="{display: 'initial',marginLeft:'40px'}" @on-change="pageChange()"></Page>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      roomModel: '',
      roomList: [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: 'aaaaa'
        },
        {
          value: '2',
          label: 'bbbbb'
        }
      ],
      columns1: [
        {
          type: 'selection',
          // "fixed": "left",
          width: 60,
          align: 'center'
        },
        {
          "title": "编号",
          "key": "no",
          // "fixed": "left",
          "width": 150,
          "sortable": true
        },
        {
          "title": "图片",
          "key": "img",
          "sortable": true
        },
        {
          "title": "名称",
          "key": "name",
          "sortable": true
        },
        {
          "title": "类型",
          "key": "type",
          "sortable": true
        },
        {
          "title": "品牌",
          "key": "brand",
          "sortable": true
        },
        {
          "title": "型号/规格",
          "key": "model",
          "sortable": true
        },
        {
          "title": "单位",
          "key": "unit",
          "width": 100,
          "sortable": true
        },
        {
          "title": "特征描述",
          "key": "describe",
          "sortable": true
        },
        {
          "title": "出库数量",
          "key": "num",
          "width": 150,
          "sortable": true
        },
        {
          type: '',
          width: 80,
          align: 'center',
          render: (h, params) => {
            return h('Icon', {
              props: {
                type: 'trash-a',
                color:'#f7ab81',
                size: '16'
              },
              on: {
                click: () => {
                  this.handleDelete('one', params.index)
                }
              }
            })
          }
        },
      ],
      data1: [
        {
          "no": 10001,
          "img": '图片',
          "name": '名称',
          "type": '通风',
          "brand": '162',
          "model": '400*500',
          "unit": '台',
          "describe": '特征',
          "num": 100
        },
        {
          "no": 10002,
          "img": '图片',
          "name": '名称',
          "type": '通风',
          "brand": '4562',
          "model": '400*500',
          "unit": '台',
          "describe": '特征',
          "num": 39
        },
        {
          "no": 10003,
          "img": '图片',
          "name": '名称',
          "type": '通风',
          "brand": '152',
          "model": '400*500',
          "unit": '台',
          "describe": '特征',
          "num": 50
        }
      ],
      selectAll:false,
      pageCount: 0,
      page: 0
    }
  },
  created() {

  },
  methods: {
    handleSelectAll () {
      this.$refs.selection.selectAll(this.selectAll)
    },
    pageChange (page) {
      this.page = page
    },
    handleDelete (type,index) {
      if (type === 'select') {

      } else if (type === 'one') {
        this.data1.splice(index, 1)
      }
    },
    handleExport () {
      this.$refs.selection.exportCsv({
        filename: 'Export data'
      })
    }
  },
  watch: {
    page (newValue, oldValue) {
      console.log("oldValue = " + oldValue + " newValue = " + newValue)
    }
  }
}
</script>

<style scoped>

</style>
