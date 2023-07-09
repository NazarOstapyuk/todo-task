import React from 'react';
import { Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type CustomButtonProps = {
    text: string;
    showStartIcon: boolean;
    isActive: boolean;
    onClick: () => void;
    mr?:string
};

export const CustomButton: React.FC<CustomButtonProps> = ({ text,mr, showStartIcon, isActive, onClick }) => {
    const buttonStyles = {
        width: '100%',
        maxWidth: '87px',
        height: '43px',
        fontSize: '14px',
        marginRight: mr || 0,
        backgroundColor: isActive ? '#5dcb42' : '',
        color: isActive ? '#ffffff' : '#5dcb42',
    };

    return (
        <Button
            startIcon={showStartIcon && <CheckCircleOutlineIcon style={{ fontSize: '16px' }} />}
            onClick={onClick}
            sx={{
                ...buttonStyles,
                '&:hover': {
                    backgroundColor: isActive ? '#5dcb42' : '',
                    color: isActive ? '#ffffff' : '#5dcb42',
                },
            }}
            color="gringo"
            variant="outlined"
        >
            {text}
        </Button>
    );
};

