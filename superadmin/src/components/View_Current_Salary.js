import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Table } from 'react-bootstrap';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import Switch from '@mui/material/Switch';
import axios from "axios";


function View_Current_Salary() {

  const navigate = useNavigate();
  const [curr_Salary, setCurr_Salary] = useState([]);

  const fetchData = () =>{
    axios.get("current_salary/view")
    .then((res)=>{
      console.log(res.data);
      setCurr_Salary(res.data.result);
    });
  }

  const handleDelete = (id) =>{
    axios.get("current_salary/delete/"+id)
    .then((res)=>{
      Swal.fire("Data Deleted Successfully");
      fetchData();
    });
  }

  const statusHandler = (id) =>{
    axios.get(`current_salary/status/${id}`,{id:id})
    .then((res)=>{
      console.log(res.data.message);
    });
    fetchData();
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="breadcrumb breadcrumb-style ">
                <li className="breadcrumb-item">
                  <h4 className="page-title">Current Salary</h4>
                </li>
                <FaHome className="HomeIcon" />
                <li className="breadcrumb-item bcrumb-1">
                  <IoIosArrowForward className="Arrow" />
                  <Link className="nav-link" to="">
                    Home
                  </Link>
                </li>
                <li className="DashboardActive">
                  <IoIosArrowForward className="Arrow" />
                  View Current Salary</li>
              </ul>
            </div>
            <div>
              <button onClick={() => navigate("/Add_Current_Salary")} className="btn btn-primary" style={{ float: 'right', marginBottom: "10px", fontSize: "12px" }}>Add Current Salary</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Current Salary</th>
                    {/* <th>Status</th> */}
                    <th colSpan={2} >Action</th>
                    <th>Create Date</th>
                  </tr>
                </thead>
                <tbody className="TableColumns ">
                  {curr_Salary.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.current_salary}</td>
                      {/* <td >
                      <Switch
                        defaultChecked={item.salary_status=="enable"?true:false}
                        defaultValue={item.salary_status}
                        name="status"
                        onChange={()=> statusHandler(item.id,item.salary_status)}
                      />
                      </td> */}
                      <td style={{ borderStyle: "none" }}>
                        <Link to={"/Update_Current_Salary/" + item.id} style={{ color: 'green' }}>
                          <FaRegEdit />
                        </Link>
                      </td>
                      <td style={{ borderStyle: "none" }}>
                        <button className="" style={{ color: "red" }} onClick={() => handleDelete(item.id)}><FaRegTrashAlt /></button>
                      </td>
                      <td>{item.create_date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default View_Current_Salary