import { useState, useEffect } from 'react';

// --- 아래는 예시 컴포넌트입니다. ---
// 실제 애플리케이션에서는 각 컴포넌트를 별도의 파일로 분리하는 것이 좋습니다.

export default function MyPage(){
      const [userList, setUserList] = useState([]);
      function getAllUser(){
              fetch("/api/getAllUser")
              .then(response => response.json())
              .then(data => {
                setUserList(data.tests);
                console.log(JSON.stringify(data.tests));
                console.log(JSON.parse(JSON.stringify(data.tests)));
              })
              .catch(error => console.error(error));
      }
      const [user, setUser] = useState('');
      const [userid, setUserid] = useState('');
      function getUserById(){
        console.log(userid);
              fetch("/api/getUserById", {
                method : "post",
                headers : {
                  'Content-Type': 'application/json'
                }, 
                body : JSON.stringify({'searchId' : userid})
              }).then(response => response.json())
              .then(data => {
                setUser(JSON.stringify(data));
                console.log(JSON.stringify(data));
              });
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
          <>
            <p>
              여기는 마이페이지입니다.
            </p>
            <p>
              백엔드 서버로부터 받은 메시지: {message}
            </p>
            <button onClick={getAllUser}>테스트1</button>
            <p>
             백엔드 서버로부터 받은 유저목록: {JSON.stringify(userList)}
            </p>
            <ul>
              {userList.map((item, index) => (
                  <li key={index}>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.age}</div>
                  </li>
              ))}
            </ul>
            <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)}/>
            <button onClick={getUserById}>테스트2</button>
            <p>
              백엔드 서버로부터 받은 유저: {user} 
            </p>
          </>
    );
}
