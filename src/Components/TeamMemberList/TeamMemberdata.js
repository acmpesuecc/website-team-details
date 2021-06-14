import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";

function TeamMemberData({ teamMemberList = [] }) {
    return (
        <div>
            <br />
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >

                {teamMemberList.map((item, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                        <Card style={{ backgroundColor: "#aad8d3" }} className="Card">
                            <CardHeader
                                title={item["name"]}
                            />
                            <div id="img-container" >
                                <img
                                    className="img-fluid"
                                    id="teamImage"
                                    src={item["Picture of yourself (Preferably 1:1)"]}
                                    alt="hey"
                                />
                            </div>
                            <CardContent>
                                <p className="synopsis">{item["1 small phrase about yourself"]}</p>
                                <IconButton aria-label="add to favorites">
                                    <a href={item["Github profile URL"]} ><i className="fab fa-github"></i></a>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <a href={item["Linkedin profile URL"]} ><i className="fab fa-linkedin-in"></i></a>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <a href={item["Instagram profile URL"]} ><i className="fab fa-instagram"></i></a>
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default TeamMemberData;