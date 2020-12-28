/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 4),
    },
}));

export default ({ open, handleClose, content }) => {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            style={{ whiteSpace: 'pre-line' }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 css={css`
                        font-family: "Montserrat", sans-serif;
                    `}>{content.services.map((item, idx) => <span key={idx}>{item} </span>)}</h2>
                    <br />
                    <h3>{content.intro}</h3>
                    <br />
                    <p>{content.impress}</p>
                </div>
            </Fade>
        </Modal>)
}