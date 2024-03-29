import { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((errors) => console.log(errors));
  }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: 'white' }}
      >
        Search Results for: {searchTerm} videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed