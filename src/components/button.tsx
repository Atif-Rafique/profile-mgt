import React from "react";

interface ButtonProps {
    variant: "primary" | "success" | "danger" | "link";
    children: React.ReactNode;
    onClick?: () => void;
}

interface OutlineButtonProps {
    variant: "primary" | "success" | "danger";
    children: React.ReactNode;
    onClick?: () => void;
}


export const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {

    const styles: Record<string, string> = {
        primary: "bg-primary text-white hover:bg-[var(--primary-color-dark)]",
        success: "bg-success text-white hover:bg-[var(--primary-success-dark)]",
        danger: "bg-danger text-white hover:bg-[var(--primary-danger-dark)]",
        link: "bg-transparent text-link underline",
    };

    return (
        <button
            className={`${styles[variant]} py-2 px-10 text-sm rounded-md transition-all`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};






export const OutlineButton: React.FC<OutlineButtonProps> = ({ variant, children, onClick }) => {

    const styles: Record<string, string> = {
        primary: "outline outline-1 outline-primary text-primary hover:bg-primary hover:text-white",
        success: "outline outline-1 outline-success text-success hover:bg-success hover:text-white",
        danger: "outline outline-1 outline-danger text-danger hover:bg-danger hover:text-white",
    };

    return (
        <button
            className={`${styles[variant]}  py-2 px-10 text-sm rounded-md transition-all`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
