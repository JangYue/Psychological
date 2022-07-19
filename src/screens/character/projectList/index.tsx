import {useState} from "react"
import React from "react"
import type { StepsProps,message } from "antd";
import { Card,Row,Col,Button,Popover,Steps } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {Link, Outlet} from "react-router-dom"
import Questions from "../../../components/Questions.tsx"
const {Step} = Steps;

const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  
  const List: React.FC = () => (
    <Steps current={1} progressDot={customDot}>
      <Step title="Finished" description="You can hover on the dot." />
      <Step title="In Progress" description="You can hover on the dot." />
      <Step title="Waiting" description="You can hover on the dot." />
      <Step title="Waiting" description="You can hover on the dot." />
    </Steps>
  );
  

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
            question:"好不容易鼓起勇气，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
            A:"云霄飞车2",
            B:"游园车",
            C:"旋转木马"
        },
        {
            question:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
            A:"云霄飞车2",
            B:"游园车",
            C:"旋转木马"
        },
        {
            question:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
            A:"云霄飞车2",
            B:"游园车",
            C:"旋转木马"
        },
        {
            question:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
            A:"云霄飞车2",
            B:"游园车",
            C:"旋转木马"
        },
        {
            question:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
            A:"云霄飞车2",
            B:"游园车",
            C:"旋转木马"
        },
    ]

}
const ProjectList = ()=>{
    const [current,setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };
        return <>
            <Steps current={current}>
                {
                    data.options.map((item,index)=>{
                        return <Step key="index"/>
                    })
                }
            </Steps>
            <Card title={data.title}>

        
            <div className="steps-content">{data.options[current].question}</div>
            <div className="steps-action">
                {current < data.options.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                    Next
                </Button>
                )}
                {current === data.options.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
                )}
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
                )}
      </div>
      </Card> 
        </>
        
}
export default ProjectList