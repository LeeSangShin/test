import { useState, useEffect } from 'react';
import Axios from 'axios';
import './css/mypage.css';

// --- 아래는 예시 컴포넌트입니다. ---
// 실제 애플리케이션에서는 각 컴포넌트를 별도의 파일로 분리하는 것이 좋습니다.

export default function MyPage(){
      const [userList, setUserList] = useState([]);
      const [stval, setStval] = useState('');
      //fetch
      function getAllUser_fetch(){
            setStval('');
              fetch("/api/getAllUser")
              .then(response => response.json())
              .then(data => {
                setUserList(data.users);
                setStval('Fetch Search');
                console.log(JSON.stringify(data.users));
                console.log(JSON.parse(JSON.stringify(data.users)));
              })
              .catch(error => console.error(error));
      }
      //Axios
      function getAllUser_axios(){
            Axios.get("/api/getAllUser")
            .then(response => {
              setUserList(response.data.users);
              setStval('Axios Search');
              console.log(JSON.stringify(response.data.users));
              console.log(JSON.parse(JSON.stringify(response.data.users)));
            })
            .catch(error => console.error(error));
      }
      const [user, setUser] = useState();
      const [userid, setUserid] = useState('');
      function getUserById(){
        console.log(userid);
              fetch("/api/getUserById", {
                method : "post",
                headers : {
                  'Content-Type': 'application/json'
                }, 
                body : JSON.stringify({'searchId' : userid})
              }).then(response =>
                /*
                response.text()로 응답을 텍스트 형태로 먼저 받습니다.
                text가 존재하면(비어있지 않으면) JSON.parse(text)로 파싱합니다.
                text가 비어있으면 null을 반환합니다.
                이후 이어지는 .then(data => ...)에서 data가 null인 경우를 이미 처리하고 있으므로(if(data == null)), 자연스럽게 연결됩니다.
                */
                 response.text().then(text => text ? JSON.parse(text) : null))
              .then(data => {
                console.log(data);
                if(data == null){
                  setUser('데이터 없음');
                } else {
                  setUser(JSON.parse(JSON.stringify(data)));
                  //setUser(JSON.stringify(data));
                  console.log(JSON.stringify(data));
                }
              }).catch(error => console.error(error));;
      }

      const [message, setMessage] = useState('');
      useEffect(() => {
        fetch('/api/mypage')
        .then(response => response.text())
        .then(message =>{
          setMessage(message);
        });
      }, []);
        return (
          <div className="">
          {/* [&_p]: 접두사를 사용하여 이 div 내부의 모든 p 태그에 일괄적으로 스타일(여백, 색상 등)을 적용합니다 */}
            <h2>개요</h2>
            <p>
              request, response 관련한 페이지 입니다.
              fetch와 Axios별로 구분하여 사용하는 방법을 구현하였습니다.
            </p>
            <h2>일반 Text response</h2>
            <p>
              백엔드 서버로부터 받은 메시지: {message}
            </p>
            <h2>JSON 데이터 request 및 response</h2>
            <p>요청 type : {stval}</p>
            <button onClick={getAllUser_fetch}>Fetch Search</button>
            <button onClick={getAllUser_axios}>Axios Search</button>
            <p>
             백엔드 서버로부터 받은 유저목록: {JSON.stringify(userList)}
            </p>
            <div class="mx-24 bg-green-200 text-justify px-6">
              <table>
                  <thead>
                      <th>ID</th>
                      <th>이름</th>
                      <th>나이</th>
                  </thead>
              {userList.map((item, index) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
              ))}
              </table>
            </div>
            <h2>JSON 데이터 request(파라미터포함) 및 response</h2>
            <p>
            </p>
            <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)}/>
            <button onClick={getUserById}>Search User</button>
            <p>
              백엔드 서버로부터 받은 유저:{typeof user === 'object' ? JSON.stringify(user) : user} 
              {/* 
              user가 존재하고(null이나 undefined가 아님), 타입이 object일 때만 리스트를 렌더링합니다.
              따라서 "데이터 없음" 문자열이 들어있을 때는 리스트가 보이지 않고, 텍스트만 출력됩니다.*/}
              {user && typeof user === 'object' ?
                <ul>
                  <li>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                  </li>
                </ul> : null
              }
            </p>
          </div>
    );
}
