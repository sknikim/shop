import { Outlet, useParams } from 'react-router-dom';
import Abg from '../ab_g.jpg';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { Nav, } from 'react-bootstrap';
import { Context1 } from '../App.js';
import { addItem } from '../store.js';
import { useDispatch } from 'react-redux';


let YellowBtn = styled.button`
background : ${props => props.bg};
color : ${props => props.bg == '#ccc' ? '#fff' : '#000'};
padding : 10px;
`


function About(props) {

    let { 재고 } = useContext(Context1)

    let { id } = useParams();
    let [count, setCount] = useState(0)
    let [alert, setalert] = useState(true)
    let [탭, 탭변경] = useState(0)
    let dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => { setalert(false) }, 2000)
    }, [])


    useEffect(() => { })  //재렌더링마다 코드 실행하고 싶을때
    useEffect(() => { }, []) //mount싱 1회 코드실행하고 싶을때
    useEffect(() => {
        return () => {    //unmount시 1회 코드실행할때

        }
    }, [])

    return (
        <>
            <div className="container">
                {
                    alert == true ?
                        <div className='alert alert-warning'>
                            2초이내 구매시 할인
                        </div>
                        : null
                }
                {/* <YellowBtn bg="#ccc">버튼</YellowBtn>
                <YellowBtn bg="#35ac3e">버튼</YellowBtn> */}
                <div className="row">
                    <div className="col-md-6">
                        <img src={Abg} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4 text-center">
                        <h4 className="pt-5">{props.shoes[id].title}</h4>
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price}</p>
                        <button className="btn btn-danger" onClick={()=>{
                            dispatch(addItem({id : 1, name : 'Grey Yordan', count : 1}))
                        }}>주문하기</button>
                    </div>
                </div>

            </div>
            <Outlet></Outlet>

            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} />


        </>
    )
}

function TabContent({ 탭 }) {

    let { 재고 } = useContext(Context1)


    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => { setFade('end') }, 100)

        return () => {
            setFade('')
        }

    }, [탭])
    return (<div className={'start ' + fade}>
        {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>)
    // if (탭 == 0){
    //    return <div>내용0</div>
    // }
    // if (탭 == 1){
    //     return <div>내용1</div>
    // }
    // if (탭 == 2){
    //     return <div>내용2</div>
    // }

}

export default About