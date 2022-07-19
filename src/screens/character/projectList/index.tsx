import {useState} from "react"
import React from "react"
import { Card,Row,Col,Button, Progress  } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {Link, Outlet} from "react-router-dom"
import Questions from "../../../components/Questions.tsx"
const data =  {
    title:"测试你的依赖度?",
    category:"character",
    options:[
        {
            question:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
            A:"云霄飞车1",
            B:"游园车",
            C:"旋转木马"
        },
        {
            question:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
            A:"云霄飞车2",
            B:"游园车",
            C:"旋转木马"
        }
    ]

}
const ProjectList = ()=>{
    const [percent,setPercent] = useState(0);
    const increase = () => {
        let newPercent = percent + 10;
        if (newPercent > 100) {
          newPercent = 100;
        }
        setPercent(newPercent);
      };
    
      const decline = () => {
        let newPercent = percent - 10;
        if (newPercent < 0) {
          newPercent = 0;
        }
        setPercent(newPercent);
      };
    
        return <>
        <Row justify="center" gutter={[0,24]}>
            <Col span={12}>
                <Progress percent={percent} />
            </Col>
        </Row>
        <Row justify='center' gutter={[0,24]}>
            
            <Col span={12}>
                <Card title={data.title}>
                    <Link to="0">"went"</Link>
                    <Outlet/>
                    {
                        data.options.map((item,index)=>{
                            return <>
                               <Questions data={item}/>
                                <Col>
                                    <Button.Group>
                                    <Button onClick={decline} icon={<MinusOutlined />} />
                                    <Button onClick={increase} icon={<PlusOutlined />} />
                                    </Button.Group>
                                </Col>
                               
                            </>
                           
                        })
                    }
                    
                </Card>
            </Col>
        </Row>
        </>
        
}
export default ProjectList