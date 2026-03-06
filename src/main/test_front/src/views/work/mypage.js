import React, { Component } from 'react';
import { useState, useEffect } from 'react';

// --- 아래는 예시 컴포넌트입니다. ---
// 실제 애플리케이션에서는 각 컴포넌트를 별도의 파일로 분리하는 것이 좋습니다.

    function MyPage() {
      const [message, setMessage] = useState('');
      useEffect(() => {
        fetch('/mypage')
        .then(response => response.text())
        .then(message =>{
          setMessage(message);
        });
      }, []);
        return (
          <>
            <p>
              여기는 마이페이지입니다.
              <content />
            </p>
              <p>
              백엔드 서버로부터 받은 메시지: {message}
            </p>
          </>
    );
    }


export default MyPage;
