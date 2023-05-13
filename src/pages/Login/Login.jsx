import { Input, Button, Checkbox, Form } from 'antd'
import React, { useState } from 'react'
import styles from './index.module.scss'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [pwd, setPwd] = useState('')
  const [checked, setChecked] = useState(false)

  const onChangeUserName = (e) => {
    setUserName(e.target.value)
  }
  const onChangePwd = (e) => {
    setPwd(e.target.value)
  }
  const onFinish = (e) => {
    console.log(e)
  }
  const onChangeCheckbox = (e) => {
    setChecked(e.target.checked)
  }
  return (
    <div className={styles['root']}>
      <div className='login'>
        <div className='login-name'></div>
        <div>
          <Form autoComplete="off" onFinish={onFinish} validateTrigger={['onChange', 'onBlur']} >
            <Form.Item name='userName'
              rules={[
                { required: true, message: '必填项' },
                { pattern: /^1\d{10}$/, message: '手机号格式不正确' }
              ]}>
              <Input type='text' placeholder='请输入用户名' allowClear value={userName} onChange={onChangeUserName} />
            </Form.Item>
            <Form.Item name='pwd' rules={[{ required: true, message: '必填项' }]}>
              <Input autoComplete="off" type='password' placeholder='请输入密码' allowClear value={pwd} onChange={onChangePwd} />
            </Form.Item>
            <Form.Item name='checked' valuePropName='checked' rules={[{
              validator (_, value) {
                if (value) {
                  return Promise.resolve()
                } else {
                  return Promise.reject(new Error('请勾选条款协议'))
                }
              }
            }]}>
              <Checkbox checked={checked} onChange={onChangeCheckbox}>我已阅读并同意 [用户协议] 和 [隐私政策]</Checkbox>
            </Form.Item>
            <Form.Item >
              <Button htmlType='submit' type='primary' style={{ width: '100%' }}>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
