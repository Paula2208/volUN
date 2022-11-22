import './StatisticsOrg.modules.css';
import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function StatisticsOrg(props) {

    const { org } = props;

    const data = [
        { name: 'Accepted', value: org.active || 0 },
        { name: 'Pending', value: org.pending || 0 },
        { name: 'Denied', value: org.denied || 0 },
    ];

    const COLORS = ['#44D18D', '#FFF386', '#FF9A3D'];

    return (
        <>
            <div
                className="StatisticsOrg-container" id={org.nonProfitUsername || ''}
            >
                <span>{org.nonProfitName || ''}</span>
                <div className="StatisticsOrg-Pie">
                    <PieChart width={800} height={400}>
                        <Pie
                            data={data}
                            cx={100}
                            cy={100}
                            innerRadius={30}
                            outerRadius={40}
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
        </>
    );
}

export default StatisticsOrg;
