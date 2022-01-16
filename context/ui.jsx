import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { createContext, useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    backgroundColor: '#fff',
    boxShadow: 24,
    p: 4,
};


export const UIContect = createContext();
export const UIProvider = (props) => {
    const [modalData, setModalData] = useState({ show: false });
    const showModal = (data) => {
        setModalData(data);
    }
    const hideModal = () => {
        setModalData({ show: false })
    }
    return (
        <UIContect.Provider value={{
            showModal,
            hideModal
        }} >
            <Modal
                open={modalData.show}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={hideModal}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {modalData.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {modalData.message}
                        </Typography>
                        <Button variant="contained" color="success" type='submit'>Ok</Button>
                    </form>
                </Box>
            </Modal>
            {props.children}
        </UIContect.Provider>
    )
}