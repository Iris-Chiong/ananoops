import React, { Component, } from 'react';
import { Table } from 'antd';
import LinkButton from '../../../components/link-button'
import axios from 'axios';
import moment from 'moment';
import {formatDate} from '../../../utils/dateUtils'
import {reqTasked} from '../../../axios/index'
const FIRST_PAGE = 1;
const PAGE_SIZE = 10;
//const user_id = window.sessionStorage.getItem("user_id");
class Approved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      taskeds:[],
      tasked:{},
      total: 0,     
      
    };
   
  }

  initColumns = () => {
    this.columns = [
      {
        title:'任务ID',
        dataIndex:'taskId'
      },
      {
        title:'实例ID',
        dataIndex:'processInstanceId'
      },
      {
        title:'发起人ID',
        dataIndex:'startUser'
      },
      {
        title:'流程名称',
        dataIndex:'processName'
      },
      {
        title:'任务名称',
        dataIndex:'taskName'
      },
      {
        title:'创建时间',
        dataIndex:'createTime',
        render:formatDate
      },
      {
        title:'结束时间',
        dataIndex:'endTime',
        render:formatDate
      },
      {
        title:'工单ID',
        dataIndex:'orderID'
      },
      {
        title:'审核状态',
        width:200,
        fixed:'right',
        dataIndex:'state'
      }
    ]
  }

  getTaskedList = async (pageNum) => {
    this.pageNum = pageNum
    this.setState({loading:true})
    
    const loginAfter = JSON.parse(window.localStorage.getItem('loginAfter'))
 
    const userId = loginAfter.loginAuthDto.userId
    
    const dataPost = {
      userid:userId,
      pageNum:pageNum,
      pageSize:10
    }
 
    const result = await reqTasked(dataPost)
    if(result.code===200){
      this.setState({loading:false})
      
      const taskeds = result.result.list
      const total = result.result.total
      this.setState({taskeds,total})
    }
  }

  componentWillMount() {
    this.initColumns()
  }

  componentDidMount(){
    this.getTaskedList(1);
  }


  render() {
    const {loading,taskeds,total} = this.state;
    return (
      <div>
        <Table
          bordered
          loading={loading}
          rowKey="id"
          dataSource={taskeds}
          columns={this.columns}
          pagination={{
            current:this.pageNum,
            defaultPageSize:10,
            showQuickJumper:true,
            total:total,
            onChange:this.getTaskedList,
          }}
        />
      </div>

    );
  }
}

export default Approved;

