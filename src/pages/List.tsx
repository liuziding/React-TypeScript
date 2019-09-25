import * as React from 'react'
import ListView from '../components/ListView'

interface IState {
    dataInfo: {
        changpinInfo: []
    }
}

export default class List extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataInfo: {
                changpinInfo: []
            }
        }
    }
    public componentDidMount() {
        fetch('http://www.baidu.com')
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataInfo: data
            })
        })
    }
    public render() {
        return (
            <div>
                {
                    this.state.dataInfo.changpinInfo.length > 0
                    ?
                    <ul>
                        {
                            this.state.dataInfo.changpinInfo.map((element, index) => {
                                return <ListView key = { index } data = { element } />
                            })
                        }
                    </ul>
                    :
                    <div>数据正在请求。。。</div>


                }
            </div>
        )
    }
}