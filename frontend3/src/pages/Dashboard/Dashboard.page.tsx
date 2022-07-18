import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Table, Pagination, Input } from '@mantine/core';
import _ from 'lodash';
import { useModals } from '@mantine/modals';
import Header from '../../components/Header';


const Dashboard = () => {
  const [data,setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [idFilter, setIDFilter] = useState();
  const [usernameFilter, setUsernameFilter] = useState();
  const [emailFilter, setEmailFilter] = useState();
  const [phoneFilter, setPhoneFilter] = useState();
  const [sexFilter, setSexFilter] = useState();
  const [zoneFilter, setZoneFilter] = useState();
  const [dataLength, setDataLength] = useState(0);

  const setFilters = (() => {
    let new_data = data;
    if(idFilter){
      new_data = _.filter(new_data, { 'id': parseInt(idFilter) });
    }
    if(usernameFilter){
      new_data = _.filter(new_data, { 'username': usernameFilter });
    }
    if(emailFilter){
      new_data = _.filter(new_data, { 'email': emailFilter });
    }
    if(phoneFilter){
      new_data = _.filter(new_data, { 'phone': phoneFilter });
    }
    if(sexFilter){
      new_data = _.filter(new_data, { 'sex': sexFilter });
    }
    if(zoneFilter){
      new_data = _.filter(new_data, { 'zone': zoneFilter });
    }

  setDataLength(new_data.length)

  return new_data;
    })




  const modals = useModals();
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/persons", {
        params: {
            sex: "",
            email: ""
          }
      }).then((res) => setData(res.data.data.results));

    }, [])
  useEffect(() => {

    setDataLength(data.length)
    setRows(_.take(_.drop(setFilters(), (page- 1)*10), 10));
    }, [page, data, idFilter, usernameFilter, emailFilter, phoneFilter, sexFilter, zoneFilter])
  console.log(rows)
    return (<>
    <Header />
    <h1>Dashboard</h1>
    <div>
      <Input placeholder="ID Filter" value={idFilter} onChange={(e) => {
          setIDFilter(e.target.value)
        }} />
         <Input placeholder="Username Filter" value={usernameFilter} onChange={(e) => {
          setUsernameFilter(e.target.value)
        }} />     <Input placeholder="Email Filter" value={emailFilter} onChange={(e) => {
          setEmailFilter(e.target.value)
        }} />     <Input placeholder="Phone Filter" value={phoneFilter} onChange={(e) => {
          setIDFilter(e.target.value)
        }} />     
        <Input placeholder="Sex Filter" value={sexFilter} onChange={(e) => {
          setSexFilter(e.target.value)
        }} />
        <Input placeholder="Zone Filter" value={zoneFilter} onChange={(e) => {
          setZoneFilter(e.target.value)
        }} />

    </div>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Sex</th>
          <th>Zone</th>
        </tr>
      </thead>
      <tbody>{rows.map((element) => (
            <tr onClick={() => {
                modals.openContextModal("single", {
                    title: "Update Data",
                    innerProps: {
                        element
                      }
                  })
              }} key={element.id}>
      <td>{element.id}</td>
      <td>{element.username}</td>
      <td>{element.email}</td>
      <td>{element.phone}</td>
      <td>{element.sex}</td>
      <td>{element.zone}</td>
    </tr>
      ))}</tbody>
    </Table>
    <Pagination page={page} onChange={setPage} total={Math.ceil(dataLength / 10)} />
    </>)
};

export default Dashboard;
