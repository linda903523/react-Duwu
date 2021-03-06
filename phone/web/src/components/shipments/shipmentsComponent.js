import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as shipmentsAction from './shipmentsAction';
import {Link} from 'react-router';

var username;
var cookies = document.cookie;
if(cookies.length>0){
    cookies = cookies.split('; ');
    cookies.forEach(function(cookie){
        var temp = cookie.split('=');
        if(temp[0] == 'username'){
            username = temp[1].slice(1,-1);
        }
    })
}
class ShipmentsComponent extends React.Component{
    componentDidMount(){
        this.props.ship(username);
    }
    render(){       
        return (
            <div>
                {
                    this.props.shipmentsdata.length==0 ?
                    <div className="noorder">
                        <p>您还没有相关订单</p>
                        <p>可以去看看有哪些想买的</p>
                    </div>:
                    <div>
                    {
                        (this.props.shipmentsdata ? this.props.shipmentsdata : []).map((item,index)=>{ 
                            return (
                                <div className="ediv-1">
                                    <ul className="ship-ul">
                                        <li><img src="./src/img/b.png"/><span>毒物宠店</span></li>
                                        <li className="li"><span>待付款</span></li>
                                    </ul>
                                    {
                                        item.map((it,idx)=>{
                                            return (
                                                <ul className="orderlist">
                                                    <li>
                                                        <img src={it.imgurl} />
                                                        <div>
                                                            <p>{it.name}</p>
                                                            <p className="de"> 
                                                                <p className="de_bottom">
                                                                <span>{it.color?`颜色:${it.color}`:''}</span>
                                                                <span>{it.size?`尺寸:${it.size}`:''}</span>
                                                                </p>
                                                                <span>x<span className="_goodsqty">{it.number}</span></span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }    
                                    
                                    <div className="eu3" >
                                        {
                                        item[0].totalprice>399?
                                        <ul className="ship-ul1">
                                            <li>
                                                <span>商品金额</span><span>￥<span>{item[0].totalprice}</span></span>
                                                </li>
                                            <li>
                                                <span>毒币抵扣：</span><span>- ￥ <span>0.00</span></span>
                                            </li>
                                            <li>
                                                <span>运费：</span><span>+ ￥ 0.00</span>
                                            </li>
                                            <li>
                                                <span>待支付：</span><span>￥<span>{item[0].totalprice}</span></span>
                                            </li>
                                            <li className="li" >
                                            <div className="cqx" onClick={this.props.order.bind(this,item)}>取消订单</div><Link to={{pathname:'money',state:{total:item[0].totalprice,number:item}}}><div className="czf">去支付</div></Link>
                                            </li>
                                            
                                        </ul>:
                                        <ul className="ship-ul1">
                                            <li>
                                                <span>商品金额</span><span>￥<span>{item[0].totalprice}</span></span>
                                                </li>
                                            <li>
                                                <span>毒币抵扣：</span><span>- ￥ <span>0.00</span></span>
                                            </li>
                                            <li>
                                                <span>运费：</span><span>+ ￥ 18.00</span>
                                            </li>
                                            <li>
                                                <span>待支付：</span><span>￥<span>{(Number(item[0].totalprice)+18.00).toFixed(2)}</span></span>
                                            </li>
                                            <li className="li" >
                                                <div className="cqx" onClick={this.props.order.bind(this,item)}>取消订单</div><Link to={{pathname:'money',state:{total:item[0].totalprice,number:item}}}><div className="czf">去支付</div></Link>
                                            </li>
                                        </ul>
                                        }
                                    </div>                
                                </div>
                            )
                        })
                    }
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        shipmentsdata:state.shipments.dataset || []
    }
}
export default connect(mapStateToProps,shipmentsAction)(ShipmentsComponent)