import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export function ConfirmationModal({ open, handleOpen, titleOfModal, message, actionOnConfirm }) {


    return (
        <>
            <Dialog size="xs" open={open} handler={handleOpen}>
                <DialogHeader>{titleOfModal}</DialogHeader>
                <DialogBody>
                    {message}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        onClick={handleOpen}
                        className="mr-5"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        onClick={() => {
                            console.log("Confirm");
                            actionOnConfirm();
                            handleOpen();
                        }}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}