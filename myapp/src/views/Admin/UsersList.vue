<template>
    <div>
         <el-table
            :data="nowlist"
            border
            style="width: 100%">
            <el-table-column
            prop="userHead"
            label="用户头像"
            width='100'>
                <template slot-scope="scope">
                    <img class="head" :src="scope.row.userHead" alt="">
                </template>
            </el-table-column>
            <el-table-column
            prop="id"
            label="注册时间">
            </el-table-column>
            <el-table-column
            prop="username"
            label="用户名">
            </el-table-column>
            <el-table-column
            prop="isAdmin"
            label="用户身份">
            </el-table-column>
            <el-table-column
            prop="email"
            label="电子邮箱">
            </el-table-column>
            <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
                <el-button  type="text" size="small" @click="handleUpdate(scope.$index, scope.row)" :plain="true">{{scope.row.isFreeze ? '已冻结' :'未冻结'}}</el-button>
                <el-button size="mini">编辑</el-button>
                <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination class="bar"
            background
            layout="prev, pager, next"
            :current-page.sync="page"
            :page-size="pageSize"
            :total="tableData.length">
        </el-pagination>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data () {
    return {
      tableData: [],
      username: '',
      page: 1,
      pageSize: 10
    }
  },
  methods: {
    // 冻结或解冻账号
    handleUpdate (index, row) {
    //   console.log(index, row)
      axios.post('/api/admin/updateFreeze', {
        email: row.email,
        isFreeze: !row.isFreeze
      }).then((res) => {
        // console.log(res.data.status)
        if (res.data.status === 0) {
          row.isFreeze = !row.isFreeze
          this.$message({
            message: this.username + '管理员，您的操作已生效',
            type: 'success'
          })
        } else {
          this.$message.error(this.username + '管理员，您的操作未成功')
        }
      })
    },
    // 删除用户账号
    handleDelete (index, row) {
      axios.post('/api/admin/deleteUser', {
        email: row.email
      }).then((res) => {
        // console.log(res.data.status)
        if (res.data.status === 0) {
        //   console.log(res.data)
          this.$message({
            message: this.username + '管理员，您的操作已生效',
            type: 'success'
          })
          this.tableData.splice(index, 1)
        } else {
          this.$message.error(this.username + '管理员，您的操作未成功')
        }
      })
    }
  },
  mounted () {
    this.username = localStorage.getItem('username')
    axios.get('/api/admin/finduserslist').then((res) => {
    //   console.log(res.data.data)
      for (var i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].isAdmin) {
          res.data.data[i].isAdmin = '管理员'
        } else {
          res.data.data[i].isAdmin = '普通用户'
        }
        // 转换时间
        res.data.data[i].id = moment(parseInt(res.data.data[i].id)).format('YYYY-MM-DD HH:mm:ss ')
      }
      this.tableData = res.data.data
    })
  },
  computed: {
    nowlist () {
      return this.tableData.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
    }
  }
}
</script>
<style lang="scss" scoped>
.bar{
    position: relative;
    top:10px;
}
.head{
    width: 40px;
    border-radius: 50%;
    margin:auto
}
</style>
