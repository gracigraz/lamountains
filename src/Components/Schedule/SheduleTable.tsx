// ScheduleTable.js
import React from 'react';
import './ScheduleTable.scss';  // Ensure your SCSS paths are correct

interface ScheduleItem {
    id: string; 
    date: string;
    description: string;
}

interface ScheduleTableProps {
    schedule: ScheduleItem[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
    return (
        <div className="schedule">
                {schedule.map(item => (
                    <div key={item.id} className="schedule__item">
                        <span>{item.date}</span>
                        <span>{item.description}</span>
                    </div>
                ))}
        </div>
    );
};

export default ScheduleTable;
