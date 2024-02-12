import * as React from "react";
import { Button, Box, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FormModal({
  formContent,
  modalOpen,
  setModalOpen,
  buttonText,
}) {
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      {buttonText && (
        <Button
          onClick={handleOpen}
          sx={{
            fontSize: "1.3rem",
          }}
        >
          {buttonText}
        </Button>
      )}

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {formContent ? formContent() : <div>Please Provide Form Content</div>}
        </Box>
      </Modal>
    </div>
  );
}
