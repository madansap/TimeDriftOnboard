import React, { useState } from 'react';

const imgArrowsOut = "http://localhost:3845/assets/39615a36e8d573be411a24376b81589dd7a07ceb.svg";

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
    <div className="bg-[#111111] box-border content-stretch flex flex-col gap-6 items-start justify-start p-[16px] relative rounded-2xl w-[320px] min-h-[200px]">
      <div className="absolute border border-[#202020] border-solid inset-0 pointer-events-none rounded-2xl shadow-[-64px_0px_148px_0px_#000000]" />
      
      {/* Header */}
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
          <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap tracking-[0.36px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              Tasks
            </p>
          </div>
          <div className="relative shrink-0 size-6">
            <img
              alt="Expand tasks"
              className="block max-w-none size-full"
              src={imgArrowsOut}
            />
          </div>
        </div>
      </div>

      {/* Task Input Card */}
      <div className="bg-[rgba(0,0,0,0.05)] box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-3 relative rounded-lg shrink-0 w-full min-h-[48px]">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
          {isFocused && (
            <div className="bg-[#ffffff] h-4 rounded-[0.5px] shrink-0 w-px animate-pulse" />
          )}
        </div>
        <input
          type="text"
          value={taskText}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="What are you focusing on ?"
          className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#747474] text-[13px] text-left tracking-[-0.13px] bg-transparent border-none outline-none placeholder:text-[#747474]"
        />
      </div>
    </div>
  );
}; 