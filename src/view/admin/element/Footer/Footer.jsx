import React from 'react';
import {Button, Divider, makeStyles, Link} from '@material-ui/core';
import theme from './Footer.style';
import { config } from '../../../../constants';

const useStyles = makeStyles(theme);
function Footer() {
    const {
        footer,
        content,
        logoWrapper
    } = useStyles()
    return (
        <div className={footer} >
            <Divider />
            <div className={content} >
                <div className={logoWrapper} >
                    <Button>
                        {config.appName}
                    </Button>
                    <div>
                        <Link color="inherit" >
                            Privacy
                        </Link>
                        {"  "}
                        <Link color="inherit" >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
