import React from "react";
import { Link } from "react-router-dom";
import { FaMoneyCheck, FaHome, FaRegWindowRestore, FaUsers, FaTasks } from "react-icons/fa";
import Datatable9 from '../Datatable/Datatable9';
import { IoIosArrowForward } from "react-icons/io";
import {BiDotsVerticalRounded} from 'react-icons/bi';

function TraningApproval() {
  return (
    <section classnName="content">
    <div class="container-fluid">
        <div classnName="block-header">
            <div class="row">
                <div classnName="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul className="breadcrumb breadcrumb-style ">
                    <li className="breadcrumb-item">
                        <h4 className="page-title">Training Approval</h4>
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
                            Training Approval
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                    <div class="header">
                       
                        <ul class="header-dropdown m-r--5"></ul>
                            <li className="dropdown"></li>
                                <Link to="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                {/* <BiDotsVerticalRounded/> */}
                                </Link>
                                <ul className ="dropdown-menu float-end">
                                    <li>
                                        <Link to="javascript:void(0);">Action</Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">Another action</Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0);">Something else here</Link>
                                    </li>
                                </ul>
                    </div>
                    <div class="body">
                        <Datatable9/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default TraningApproval;