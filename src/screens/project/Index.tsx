import React from "react";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import {Menu,Col,Row} from "antd"

const ProjectScreen = () =>{
    return(
        <>
            <Row>
                <Col span={24}>
                    <Link to="/character">个性测试</Link>
                    <Link to="/love">爱情测试</Link>
                    <Link to="/money">财运测试</Link>
                </Col>
            </Row>
          
            <Row>
                {/* <Col span={12} offset={1}>
                    <Character/>
                </Col> */}
                测试
            </Row>
        </>
    )
}

export default ProjectScreen;