"use client"

import React from "react";

interface PaginationProps {
    total?: number;
    current?: number;
    pageSize?: number;
    onChange?: (page: number) => void;
    disabled?: boolean;
}

export const CustomPagination: React.FC<PaginationProps> = ({
    total = 1,
    current = 1,
    pageSize = 10,
    onChange = () => { },
    disabled = false,
}) => {
    const totalPages = Math.ceil(total / pageSize);

    const handlePrev = () => {
        if (!disabled && current > 1) {
            onChange(current - 1);
        }
    };

    const handleNext = () => {
        if (!disabled && current < totalPages) {
            onChange(current + 1);
        }
    };

    const handleJumpToFirst = () => {
        if (!disabled && current > 1) {
            onChange(1);
        }
    };

    const handleJumpToLast = () => {
        if (!disabled && current < totalPages) {
            onChange(totalPages);
        }
    };

    return (
        <div className="flex items-center gap-1">
            {/* Jump to First */}
            <button
                onClick={handleJumpToFirst}
                disabled={disabled || current === 1}
                className={`px-3  ${disabled || current === 1 ? "cursor-not-allowed text-gray-400 hover:bg-transparent border border-gray-400 hover:border-gray-400 hover:text-gray-400" : "bg-white text-primary border border-primary hover:bg-[var(--primary-color-dark)] hover:text-white hover:border-primary-dark"
                    }`}
            >
                «
            </button>

            {/* Previous */}
            <button
                onClick={handlePrev}
                disabled={disabled || current === 1}
                className={`px-3 ${disabled || current === 1 ? "cursor-not-allowed text-gray-400 hover:bg-transparent border border-gray-400 hover:border-gray-400 hover:text-gray-400" : "bg-white text-primary border border-primary hover:bg-[var(--primary-color-dark)] hover:text-white hover:border-primary-dark"
                    }`}
            >
                ‹
            </button>

            {/* Current Page */}
            <span className="text-gray-400 text-sm">
                {current} of {totalPages}
            </span>

            {/* Next */}
            <button
                onClick={handleNext}
                disabled={disabled || current === totalPages}
                className={`px-3   ${disabled || current === totalPages ? "cursor-not-allowed text-gray-400 hover:bg-transparent border border-gray-400 hover:border-gray-400 hover:text-gray-400" : "bg-white text-primary border border-primary hover:bg-[var(--primary-color-dark)] hover:text-white hover:border-primary-dark"
                    }`}
            >
                ›
            </button>

            {/* Jump to Last */}
            <button
                onClick={handleJumpToLast}
                disabled={disabled || current === totalPages}
                className={`px-3 ${disabled || current === totalPages ? "cursor-not-allowed text-gray-400 hover:bg-transparent border border-gray-400 hover:text-gray-400" : "bg-white text-primary border border-primary hover:bg-[var(--primary-color-dark)] hover:text-white hover:border-primary-dark"
                    }`}
            >
                »
            </button>
        </div>
    );
};