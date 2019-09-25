import * as React from 'react'
import { Button } from 'antd';

interface IProps {
    title: string,
    age: number,
    work?: string,
    onMyClick: any
}

// 通过接口申明状态
interface IState {
    count: number
}

export default class Hello extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props)
        this.state = {
            count: 1000
        }
        this.clickHeadler = this.clickHeadler.bind(this);
        this.clickMsgHeadler = this.clickMsgHeadler.bind(this);
    }
    // 实现 state
    // public readonly state: Readonly<IState> = {
    //     count: 1000
    // }
    public clickHeadler() {
        this.setState({
            count: 2000
        })
    }
    public clickMsgHeadler() {
        this.props.onMyClick('你好，我叫刘自定');
    }
    public render() {
        const { title, age } = this.props;
        return (
            <div>
                <div>
                    Hello: { title }{ age }
                </div>
                <div>
                    { this.state.count }
                    <Button onClick = { this.clickHeadler }>按钮</Button>
                    <Button onClick = { this.clickMsgHeadler }>Send msg</Button>
                </div>
            </div>
        )
    }
}