import { Button, Input, Select } from 'antd'
import React from 'react'
import http from '../../utils/requestProject'
import styles from './index.module.scss'

const Layout = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onClick = async () => {
    const res = await http({
      url: 'channelss',
      method: 'get'
    })
    console.log(res)
  }
  return (
    <div className={styles.root}>
      <h1>layout</h1>
      <Button type='primary' onClick={onClick}>我是按钮</Button>
      <Input style={{ width: '240px' }} />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </div>
  )
}

export default Layout
