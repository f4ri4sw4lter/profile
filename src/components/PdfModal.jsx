import React, { useState } from 'react';
import { Modal, Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfModalExample = () => {
    const [open, setOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null); // Guarda la URL del PDF seleccionado

    // Función para abrir el modal
    const handleOpen = (pdf) => {
        setPdfUrl(pdf); // Actualiza el archivo PDF que se mostrará
        setOpen(true);
    };

    // Función para cerrar el modal
    const handleClose = () => {
        setOpen(false);
        setPdfUrl(null);
    };

    return (
        <div>
            {/* Card que abre el modal */}
            <Card onClick={() => handleOpen('../assets/docs/diploma-arquitecturas-limpias.pdf')} sx={{ cursor: 'pointer', maxWidth: 300 }}>
                <CardContent>
                    <Typography variant="h6">Abrir PDF</Typography>
                    <Typography variant="body2">Haz clic para ver el contenido del PDF</Typography>
                </CardContent>
            </Card>

            {/* Modal para mostrar el PDF */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="pdf-modal-title"
                aria-describedby="pdf-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        overflow: 'hidden',
                    }}
                >
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
                        ✖
                    </IconButton>
                    <Typography variant="h6" id="pdf-modal-title" gutterBottom>
                        Visor de PDF
                    </Typography>
                    {pdfUrl ? (
                        <div style={{ height: '90%' }}>
                            <Viewer fileUrl={pdfUrl} />
                        </div>
                    ) : (
                        <Typography variant="body2">Cargando...</Typography>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default PdfModalExample;