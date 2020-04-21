import React from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DissagreementDialog(props) {
    return(
    <div>
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Why did you chose differently from the recommendation?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    check boxes go here flowed by some text
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Continue without sending
                </Button>
                <Button onClick={props.handleClose} color="primary">
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    </div>)
}

DissagreementDialog.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired

};

export default (DissagreementDialog);