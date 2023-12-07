import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import Image from "next/image"

import newsImg from '@/assets/latestNews.png'

const Sidebar = () => {
    return (
        <Box>
            <Card className="my-5">
                <CardActionArea>
                    <CardMedia>
                        <Image src={newsImg} alt="Top news" width={800} />
                    </CardMedia>
                    <CardContent>
                        <p className="text-white bg-red-500 w-[100px] p-1 rounded-md my-3">Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom>
                            By Awlad Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default Sidebar