import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

import newsImg from '@/assets/latestNews.png'
import Image from "next/image"

const LatestNews = () => {
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

            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card className="my-5">
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={newsImg} alt="Top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className="text-white bg-red-500 w-[100px] p-1 rounded-md my-3">Technology</p>
                                    <Typography gutterBottom>
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card className="my-5">
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={newsImg} alt="Top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className="text-white bg-red-500 w-[100px] p-1 rounded-md my-3">Technology</p>
                                    <Typography gutterBottom>
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card className="my-5">
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={newsImg} alt="Top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className="text-white bg-red-500 w-[100px] p-1 rounded-md my-3">Technology</p>
                                    <Typography gutterBottom>
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card className="my-5">
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={newsImg} alt="Top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className="text-white bg-red-500 w-[100px] p-1 rounded-md my-3">Technology</p>
                                    <Typography gutterBottom>
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default LatestNews