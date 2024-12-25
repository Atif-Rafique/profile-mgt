'use client'

import { useState } from "react";

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export const MonthSelector = ({ label }: any) => {



    const [selectedMonths, setSelectedMonths] = useState<any>([]);


    const handleCheckboxChange = (e: any) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedMonths([...selectedMonths, value]);
        } else {
            setSelectedMonths(selectedMonths.filter((month: any) => month !== value));
        }
    };



    return (
        <div>
            <div className="grid grid-cols-6 gap-5">
                {months.map((month) => (
                    <div key={month} className="mr-2 mb-2">
                        <label
                            className={`font-roboto text-[13px] cursor-pointer rounded-lg px-4 py-1 border transition-colors duration-200 
                            ${selectedMonths.includes(month) ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}
                            border-gray-300`}
                        >
                            <input
                                type="checkbox"
                                value={month}
                                checked={selectedMonths.includes(month)}
                                onChange={handleCheckboxChange}
                                className="hidden"
                            />
                            {month}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};