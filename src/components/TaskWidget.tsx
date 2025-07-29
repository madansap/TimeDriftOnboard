import React, { useState } from 'react';
import { ArrowsOut } from '@phosphor-icons/react';

export const TaskWidget: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="justify-center items-stretch shadow-[0_-1px_1px_0_color(display-p3_1_1_1_/_0.10)_inset,0_1px_1px_0_color(display-p3_1_1_1_/_0.25)_inset,0_8px_6px_0_color(display-p3_0_0_0_/_0.05)] backdrop-blur-[10px] bg-[color(display-p3_0.0667_0.0667_0.0667)] flex max-w-full w-80 flex-col flex-1 p-3 rounded-2xl">
      
      <div className="w-full flex-1">
        <header className="w-full text-base text-white font-medium whitespace-nowrap pb-6">
          <div className="flex w-full items-center gap-2">
            <ArrowsOut className="w-5 h-5 text-white" weight="regular" />
            <h2>Tasks</h2>
          </div>
        </header>
        
        <main className="flex w-full flex-col items-center py-12">
          <div className="self-stretch flex min-h-20 w-full flex-col items-center pb-4 px-[116px] max-md:px-5">
            <div className="justify-center items-center bg-[color(display-p3_0.0941_0.0941_0.0941)] flex min-h-16 w-16 h-16 rounded-full">
              <ArrowsOut className="w-8 h-8 text-white" weight="regular" />
            </div>
          </div>
          
          <div className="flex flex-col items-center font-medium text-center">
            <h3 className="text-[15px] text-white leading-loose pb-2">
              No Tasks Added
            </h3>
            <p className="text-[11px] text-[#b3b3b3] leading-[19px] mt-2 pb-px px-2">
              Add your first task to start tracking
              <br />
              your daily activities and goals.
            </p>
          </div>
          
          <div className="text-[13px] text-white font-medium text-center leading-loose pt-4">
            <button
              onClick={() => console.log('Add task clicked')}
              className="justify-center items-center border border-[color(display-p3_0.1255_0.1255_0.1255)] bg-[color(display-p3_0.0941_0.0941_0.0941)] flex px-[17px] py-[11px] rounded-lg border-solid hover:bg-[color(display-p3_0.1255_0.1255_0.1255)] transition-colors"
            >
              <div className="self-stretch flex items-center gap-2 my-auto">
                <ArrowsOut className="w-4 h-4 text-white" weight="regular" />
                <span>Add New Task</span>
              </div>
            </button>
          </div>
          
          <div className="text-xs text-[#b3b3b3] font-medium text-center leading-loose pt-2">
            <ul className="space-y-2">
              <li>Track daily activities</li>
              <li>Set goals and reminders</li>
              <li>Monitor progress</li>
            </ul>
            <p className="leading-5 pt-2">
              Keep your tasks organized and never
              <br />
              miss important deadlines.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}; 