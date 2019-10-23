import React, { Component } from 'react'
import {Button, Input, Icon, Form} from 'antd'

@Form.create()
export default class Login extends Component {
    render() {
        return (
            <div>
                <Input 
                    type='text'
                    prefix={<Icon type='user' />}
                />
                 <Input.Password  
                    prefix={<Icon type='lock' />}
                    visibilityToggle={true}
                />
                <Button type="primary">登录</Button>
                <Button type="primary">重置</Button>
            </div>
        )
    }
}
