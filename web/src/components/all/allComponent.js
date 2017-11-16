import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as allAction from './allAction';

class AllComponent extends React.Component{
    componentDidMount(){
        this.props.Init1();
    }
    render(){
        return (
            <div className="ediv-1">
                <ul className="eu3">
                     {
                       (this.props.alldata ? this.props.alldata : []).map(function(item,index){
                            return (
                            <li key={'li'+index} className="eli">
                                <img src={item.img}/>
                                <span>{item.name}</span>
                                <p><span>￥{item.price}</span></p>
                                <p><span>x{item.number}</span></p>
                            </li>
                            )
                        })
                    }
                </ul>
                <div className="ediv-2">
                    <ul className="eul">
                        <li className="eli-2">更多</li>
                        <li className="eli-1">查看物流</li>
                        <li className="eli-1">卖了换钱</li>
                        <li className="eli-1">评价</li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        alldata:state.all.dataset
    }
}
export default connect(mapStateToProps,allAction)(AllComponent)
