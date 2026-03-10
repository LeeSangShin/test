import React, { Component } from "react";
import Axios from 'axios';

export default function WorkPage() {

  const handleSubmit = (formdata) => {
    console.log('A name was submitted: ' + formdata);
    console.log(formdata);
    console.log(formdata.get('sexCd'));
    const param = {
      id : formdata.get('id'),
      name : formdata.get('name'),
      age : formdata.get('age'),
      sexCd : formdata.get('sexCd')
    }
    console.log(param);
    Axios.post("/api/createUser", param)
            .catch(error => console.error(error));
  }
    return (
      <>
      <h2>form data post 입니다</h2>
      <p>form을 이용하여 데이터를 서버에 post요청 진행합니다.</p>
      <form action={handleSubmit}>
        <div class="mb-6">
          <label class="block mb-2.5 text-sm font-medium text-heading">ID:</label>
          <input class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-3 py-2.5 shadow-xs placeholder:text-body" type="text" name="id"/>
          </div>
        <div class="mb-6">
            <label class="block mb-2.5 text-sm font-medium text-heading">Name</label>
            <input class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-3 py-2.5 shadow-xs placeholder:text-body" type="text" name="name" />
        </div>
        <div class="mb-6">
          <label class="block mb-2.5 text-sm font-medium text-heading">Age:</label>
          <input class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-3 py-2.5 shadow-xs placeholder:text-body" type="number" name="age" />
        </div>
        <div class="mb-6">
          <label class="block mb-2.5 text-sm font-medium text-heading">Sex:</label>
          <div>
            <label>M</label>
            <input class="bg-neutral-secondary-medium border border-default-medium 
            text-heading text-sm rounded-base focus:ring-brand 
            focus:border-brand block px-3 py-2.5 
            shadow-xs placeholder:text-body" type="radio" value="M" name="sexCd" />
            <label>F</label>
            <input class="bg-neutral-secondary-medium border border-default-medium 
            text-heading text-sm rounded-base focus:ring-brand 
            focus:border-brand block px-3 py-2.5 
            shadow-xs placeholder:text-body" type="radio" value="F" name="sexCd" />
          </div>
        </div>
        <input class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
          type="submit" value="Submit" />
      </form>
      </>
    );
}