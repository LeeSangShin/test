// Aggrid.js
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import packageJson from '../../../package.json';
ModuleRegistry.registerModules([ AllCommunityModule ]);

export default function GridPage(){
  const [columnDefs] = useState([
      { headerName: "No", field: "rownum", width: 55  },
      { headerName: "ID", field: "id" },
      { headerName: "이름", field: "name" },
      { headerName: "나이", field: "age" }
    ]);
  const [rowData, setRowData] = useState([]);

  function getAllUser(){
          fetch("/api/getAllUser")
          .then(response => response.json())
          .then(data => {
            setRowData(data.users);
            console.log(JSON.stringify(data.users));
            console.log(JSON.parse(JSON.stringify(data.users)));
          })
          .catch(error => console.error(error));
  }

  return (
    <>
    <h2>Ag Grid 페이지 입니다</h2>
    <p>ag-grid를 이용하여 데이터 request 및 response 데이터로 grid render를 구현하였습니다</p>
    <p>ag-grid-community 버전 : {packageJson.dependencies["ag-grid-community"]}</p>
    <p>ag-grid-react 버전 : {packageJson.dependencies["ag-grid-react"]}</p>
    <button onClick={getAllUser}>Get All User</button>
    <div className="ag-theme-alpine" style={{ width: "97vw", height: "48vh" }}>
      <AgGridReact floatingFiltersHeight="30" columnDefs={columnDefs} rowData={rowData} />
    </div>
    </>
  );
}