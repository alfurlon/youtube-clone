import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Tooltip } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ( {video: { id: { videoId }, snippet}} ) => {

    return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px',}, boxShadow: 'none', borderRadius: '10px'}}>
        <Link to={`/video/${videoId}`}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: { sx: '100%', sm: '358px', md: '320px'}, height: 180 }}
            >

            </CardMedia>
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
            <Link to={`/video/${videoId}`}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                    {snippet?.title.slice(0,60)}
                </Typography>
            </Link>
            <Tooltip title={snippet?.channelTitle} placement='top-start'>
                <Link to={`/channel/${snippet?.channelId}`}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {snippet?.channelTitle.slice(0,60)}
                        <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
                    </Typography>
                </Link>
            </Tooltip>
        </CardContent>
    </Card>
    )
}

export default VideoCard