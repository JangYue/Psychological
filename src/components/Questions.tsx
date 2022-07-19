import React,{useState} from "react"
import {Row,Col} from "antd"
// const data =  {
//     question:"好不容易鼓起勇气，相约和你心怡已久的他出去约会，而他也很爽快的答应了，于是你们选在最近才开始营业的新型游乐场出游，但是因为它才开张不久，所以游乐场内一片混乱，人山人海；于是你们决定玩云霄飞车、游园车、旋转木马这三种的其中一种，但是因为三种排队人潮都差不多，大约都要等４０分钟左右，这时让你心怡已久的他开口：「你来决定好了。」",
//     A:"云霄飞车",
//     B:"游园车",
//     C:"旋转木马"
// }
const Questions = ({data})=>{
    // const [data,setData] = useState(data);
    return<>
    {
          Object.keys(data).map((key)=>{
                return <Row>
                    <Col key={key}>{key==="question"?"":`${key}:`}{data[key]}</Col>
                </Row>
            } 
         )

    }
       
    </>
}

export default Questions;