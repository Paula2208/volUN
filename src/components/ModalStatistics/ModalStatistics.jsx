import './ModalStatistics.modules.css';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import StatisticsOrg from '../StatisticsOrg/StatisticsOrg';
import {getNumberOfUsersPerType} from '../../api/statistics'

function ModalStatistics(props) {

  const { show, handleClose } = props;

  const mockupOrg = [
    {
      nonProfitUsername: "patitasSuaves",
      nonProfitName: "nonProfitName nonProfitLastname",
      pending: 12,
      active: 15,
      denied: 17
    },
    {
      nonProfitUsername: "patitasSuaves2",
      nonProfitName: "nonProfitName2 nonProfitLastname2",
      pending: 13,
      active: 14,
      denied: 15
    },
    {
      nonProfitUsername: "patitasSuaves3",
      nonProfitName: "nonProfitName3 nonProfitLastname3",
      pending: 13,
      active: 154,
      denied: 174
    },
    {
      nonProfitUsername: "patitasSuaves4",
      nonProfitName: "nonProfitName4 nonProfitLastname4",
      pending: 13,
      active: 120,
      denied: 174
    }
  ]

  const [orgCount, setOrgCount] = useState(0);
  const [volunteerCount, setVolunteerCount] = useState(0);
  const [orgStatistics, setOrgStatistics] = useState(mockupOrg); //must be []

  const data = [
    { name: 'Volunteers', value: volunteerCount },
    { name: 'Non Profits', value: orgCount },
  ];

  const COLORS = ['#FF69F0', '#1CBBFF'];

  useEffect(() => {
    if(localStorage.getItem('userType') === 'ADMIN' ){
        getNumberOfUsersPerType()
            .then((results) => {
              setOrgCount(results.orgs);
              setVolunteerCount(results.volunteers);
            });
    }

  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="ModalStatistics-container">
        <Modal.Header className="ModalStatistics-header">
          <h1>
            Statistics
          </h1>

          <div className="ModalStatistics-header-container">

            <div className="ModalStatistics-header-data">
              <div className="ModalStatistics-general-row">
                <span className="ModalStatistics-letter letter">
                  Volunteers
                </span>
                <span className="ModalStatistics-letter volunteer">
                  {`${volunteerCount}`}
                </span>
              </div>
              <div className="ModalStatistics-general-row">
                <span className="ModalStatistics-letter">
                  Non Profits
                </span>
                <span className="ModalStatistics-letter org">
                  {`${orgCount}`}
                </span>
              </div>
            </div>
            <div className="ModalStatistics-Pie">
              <PieChart width={800} height={400}>
                <Pie
                  data={data}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>

        </Modal.Header>
        <Modal.Body className="ModalStatistics-body">
          <h2>
            Non Profit statistics
          </h2>
          <div className="ModalStatistics-Chart-data">
            <div className="ModalStatistics-Chart-name">
              <div className="ModalStatistics-Chart-line accepted" />
              <span>Volunteers Accepted</span>
            </div>

            <div className="ModalStatistics-Chart-name">
              <div className="ModalStatistics-Chart-line pending" />
              <span>Volunteers Pending</span>
            </div>

            <div className="ModalStatistics-Chart-name">
              <div className="ModalStatistics-Chart-line denied" />
              <span>Volunteers Denied</span>
            </div>
          </div>
          <div className="ModalStatistics-Org">
            {orgStatistics.map((org) => (<StatisticsOrg org={org}/>))}
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default ModalStatistics;
