import { Button, Input, Select } from 'antd'
import React from 'react'

const Layout = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <div>
      layout
      <Button type='primary'>我是按钮</Button>
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
