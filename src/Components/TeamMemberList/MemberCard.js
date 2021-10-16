import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

function MemberCard({ member }) {
    const [hasError, setHasError] = useState(false);
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'white' }} className='Card'>
                <div class='img-container'>
                    <img
                        className='img-fluid'
                        src={member.picture}
                        alt=''
                        loading='lazy'
                        onError={() => setHasError(true)}
                    />
                </div>
                <CardHeader title={member.name} />
                <CardContent style={{ margin: '0', padding: '0' }}>
                    <p className='synopsis'>{member['bio']}</p>
                    <IconButton aria-label='github'>
                        <a className='social-link' href={member.github}>
                            <i className='fab fa-github'></i>
                        </a>
                    </IconButton>
                    <IconButton aria-label='linkedin'>
                        <a className='social-link' href={member.linkedin}>
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                    </IconButton>
                    <IconButton aria-label='instagram'>
                        <a className='social-link' href={member.instagram}>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default MemberCard;
