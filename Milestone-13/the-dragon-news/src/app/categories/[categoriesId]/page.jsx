import { getCategoryNews } from "@/utils/getCategoryNews"
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const dynamicPage = async ({ searchParams }) => {

    const { data: categoryNews } = await getCategoryNews(searchParams?.category.toLowerCase())

    return (
        <div>
            <h1 className="text-center font-medium">News for {searchParams?.category} is {categoryNews.length}</h1>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {
                        categoryNews?.map(category => (
                            <Grid item xs={6} key={category?.id}>
                                <Link href={`/news/${category?._id}`}>
                                    <Card className="my-5">
                                        <CardActionArea>
                                            <CardMedia sx={
                                                {
                                                    "& img": {
                                                        width: "100%",
                                                        height: "250px"
                                                    }
                                                }
                                            }>
                                                <Image src={category?.thumbnail_url} height={200} alt="Top news" width={800} />
                                            </CardMedia>
                                            <CardContent>
                                                <p className="text-white bg-red-500 text-center w-[100px] p-1 rounded-md my-3">{searchParams?.category}</p>
                                                <Typography variant="h6" gutterBottom>
                                                    {category?.title.length > 30 ? category?.title.slice(0, 30) + '...' : category?.title}</Typography>
                                                <Typography gutterBottom>
                                                    By {category?.author?.name} - {category?.author?.published_date}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {category?.details.slice(0, 200)}...
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default dynamicPage