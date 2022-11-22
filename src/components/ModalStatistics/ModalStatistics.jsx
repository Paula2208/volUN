import './ModalStatistics.modules.css';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function ModalStatistics(props) {

  const { show, handleClose } = props;

  const [orgCount, setOrgCount] = useState(10);
  const [volunteerCount, setVolunteerCount] = useState(20);

  const data = [
    { name: 'Volunteers', value: volunteerCount },
    { name: 'Non Profits', value: orgCount },
  ];

  const COLORS = ['#FF69F0', '#1CBBFF'];

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
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default ModalStatistics;
