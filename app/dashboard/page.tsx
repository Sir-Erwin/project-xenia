"use client";

import React from 'react';
import './dashboard.css';

export default function Login_Page() {
  const openSidebar = () => {};
  const closeSidebar = () => {};

  return (
    <div>
      <header>
        <nav>
          <div id="main-logo">
            <h1><a href="/">Project Xenia</a></h1>
          </div>
        </nav>
      </header>
      
      <div className="grid-container">

      {/* Header */}
      <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header-left">
            <a href="home.html">
                
              </a>
        </div>
        <div className="header-right">
            <a href="home.html">
                <i className="fa fa-home"></i>
              </a>
        </div>
      </header>
      {/* End Header */}

      {/* Sidebar */}
      <aside id="sidebar">
        <div>
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <i className="fa fa-heartbeat"></i>
              <span>HealthX</span>
            </div>
            <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
          </div>

          <div className="side-link">
            <ul className="sidebar-list">
              <a href="dashboardP.html">
                  <li className="sidebar-list-item">
                      <i className="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                  </li>
              </a>
              <a href="add-appointmentP.html">
                  <li className="sidebar-list-item">
                      <i className="fa fa-calendar"></i>
                      <span>Appointments</span>
                    </li>
              </a>
              <a href="paymentP.html">
                <li className="sidebar-list-item">
                  <i className="fa fa-credit-card"></i>
                  <span>Payment</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <a href="loginP.html" className="sidebar-list-item" id="logout">
          <i className="fa fa-sign-out"></i>
          <span>Logout</span>
        </a>
      </aside>
      {/* End Sidebar */}

      {/* Main */}
      <main className="main-container">
        <div className="main-title">
          <p className="font-weight-bold">DASHBOARD</p>
        </div>

        <div className="main-cards">

          <div className="card">
            <div className="card-inner">
              <i className="fa fa-user-md"></i>
              <p className="text-primary">Total Payment</p>
              
            </div>
            <span className="text-primary font-weight-bold">-</span>
          </div>

          <div className="card">
            <div className="card-inner">
              <i className="fa fa-calendar"></i>
              <p className="text-primary">APPOINTMENTS</p>
              
            </div>
            <span className="text-primary font-weight-bold">-</span>
          </div>

        </div>

        <div className="data">
          <h3>Appointment</h3>
          <div className="table-info">
              <table>
                  <thead>
                      <tr>
                          <th>Doctor</th>
                          <th>Speaciality</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Status</th>                        
                      </tr>
                  </thead>
              </table>
          </div>
      </div>

      </main>
      {/* End Main */}

      </div>
    </div>

    
  );
}
