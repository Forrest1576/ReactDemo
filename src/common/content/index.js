import React, { Component} from 'react';
import { Layout,Breadcrumb} from 'antd';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {Content1,Layout1,Breadcrumb1, Hidden, Hiddenall,Footer1}from './style'
import Dinput from '../../pages/dinput';
import Login from '../../pages/login';
import Dcollection from '../../pages/dcollection';
import Riskrate from '../../pages/riskrate';
import Pricerate from '../../pages/pricerate';
import Authority from '../../pages/authority';
import Rolemanager from '../../pages/rolemanager';
import Facemodule from '../../pages/facemodule';
import Malearning from '../../pages/malearning';
import { loginCss } from '../../pages/login/style';
import {actionCreators} from '../../pages/login/store'
class MyContent extends Component{
    /**
     * 生命周期函数，用于判断session中的登录状态
     */
    componentWillMount(login,username){
        this.props.TransFormData(login,username)
    }
    render(){
        const {Content,Footer} = Layout;
        const{login}=this.props;
            return (          
                <Layout style={login?Layout1:Hidden}>
                    <Breadcrumb style={login?Breadcrumb1:Hiddenall}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                     <Content
                      style={login?Content1:loginCss}
                     >   
                        <Route path='/'exact component={Login} />                                                                                                                                                               <Route path='/dinput'exact component={Dinput}/>                           
                        <Route path='/dcollection' exact component={Dcollection}/>
                        <Route path='/riskrate' exact component={Riskrate}/>
                        <Route path='/pricerate' exact component={Pricerate}/>
                        <Route path='/authority' exact component={Authority}/>
                        <Route path='/rolemanager' exact component={Rolemanager}/>
                        <Route path='/facemodule' exact component={Facemodule}/>
                        <Route path='/malearning' exact component={Malearning}/>                                           
                         </Content>
                         <Footer style={login?Footer1:Hiddenall} > ©2018 智慧海洋</Footer>
                    </Layout> 
    
            )  
    }
}
const mapState=(state)=>{//state to props
    return{      
       login:state.getIn(['login','login']),//login下login字段
    }
}
const mapDispath=(dispatch)=>{
    return{
        TransFormData(login,username){
            dispatch(actionCreators.TransFormData(login,username))           
        }
        
    }
}

export default connect(mapState,mapDispath)(MyContent);