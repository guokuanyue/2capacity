import request from '@/utils/request'
import axios from 'axios'

export function getAlarmConfingInfo(val, val2) {
  return request({
    url: '/netgate-server/alarmSet/alarmSetList?vt=' + val2 + '&switchhouse=' + val,
    method: 'get'
  })
}
export function addAlarmConfigInfo(arg) {
  return request({
    url: '/netgate-server/alarmSet/saveAlarmSet',
    method: 'post',
    epPointList: arg
  })
}

export function delAlarmConfigInfo(arg) {
  return request({
    url: '/netgate-server/alarmSet/deleteAlarmSet?id=' + arg,
    method: 'delete'
  })
}

export function updateAlarmConfigInfo(arg) {
  return request({
    url: '/netgate-server/alarmSet/updateAlarmSet',
    method: 'post',
    epPointList: arg
  })
}

export function updateAlarmConfigInfoBash(arg) {
  return request({
    url: '/netgate-server/alarmSet/updateAlarmSetBash',
    method: 'post',
    epPointList: arg
  })
}
