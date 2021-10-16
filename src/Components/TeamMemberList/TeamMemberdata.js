import { Grid } from '@material-ui/core';
import MemberCard from './MemberCard';

function TeamMemberData({ teamMemberList = [] }) {
    return (
        <div>
            <br />
            <Grid
                container
                spacing={4}
                style={{ padding: '2rem 0' }}
                direction='row'
                justify='flex-start'
                alignItems='flex-start'>
                {teamMemberList.map((member, i) => {
                    return <MemberCard key={i} member={member} />;
                })}
            </Grid>
        </div>
    );
}

export default TeamMemberData;
