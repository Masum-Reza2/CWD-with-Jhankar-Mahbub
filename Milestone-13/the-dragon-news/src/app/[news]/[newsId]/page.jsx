import { getSingleNews } from "@/utils/getSingleNews"
import { Avatar, Box, Grid, Typography } from "@mui/material"
import Image from "next/image"

const page = async ({ params }) => {

    const { data } = await getSingleNews(params?.newsId)

    return (
        <Box className="py-5">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Image src={data?.thumbnail_url} alt="image" width={800} height={200} />
                    <Grid container spacing={2} className="mt-3">
                        <Grid item xs={6}>
                            <Image src={data?.image_url} alt="image" width={800} height={200} />
                        </Grid>
                        <Grid item xs={6}>
                            <Image src={data?.image_url} alt="image" width={800} height={200} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6} className="space-y-2">
                    <Typography variant="h5">
                        {data?.title}
                    </Typography>
                    <Box sx={
                        {
                            display: "flex",
                            alignItems: "center",
                            gap: 4
                        }
                    }>
                        <Avatar alt="Remy Sharp" src={data?.author?.img} />
                        <Typography>{data?.author?.name}</Typography>
                        <Typography>Published : {data?.author?.published_date}</Typography>
                    </Box>
                    <Typography style={{
                        textAlign: 'justify',
                        whiteSpace: 'pre-line',
                        margin: '30px 0px'
                    }}>
                        {data?.details}
                    </Typography>

                    <Typography variant="h6">
                        ``Many desktop publishing packages and web page editors now use as their default model text!
                    </Typography>

                    <Typography>
                        --{data?.author?.name}
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    )
}

export default page