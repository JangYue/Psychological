import { Card,Row,Col} from 'antd';
import React from 'react';
import {Link} from "react-router-dom"
import "./index.css"

const data = [
    {
        title:"测试你的依赖度?",
        intro:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
        category:"character",
        options:[
            {
                A:"云霄飞车",
                B:"游园车",
                C:"旋转木马"
            }
        ]

    },
    {
        title:"测试你的依赖度?",
        intro:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
        category:"character",
        options:[
            {
                A:"云霄飞车",
                B:"游园车",
                C:"旋转木马"
            }
        ]

    },
    {
        title:"测试你的依赖度?",
        intro:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
        category:"character",
        options:[
            {
                question:"",
                A:"云霄飞车",
                B:"游园车",
                C:"旋转木马"
            }
        ]

    },
]
const Love:React.FC = () => (
  <div className="site-card-border-less-wrapper">
    <Card title="爱情测试" bordered={true}  headStyle={{fontWeight:600}} style={{width: 600,fontweigth:600 }}>
      {
        data.map((item,index)=>{
            return <p key={index}>
                <Link to={`/love/${index}`}>{item.title}</Link>
            </p>
        })
      }
    </Card>
  </div>
);

export default Love;
