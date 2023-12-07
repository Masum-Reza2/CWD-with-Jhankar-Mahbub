import { Box, Container, Typography } from "@mui/material"
import newsImg from '@/assets/The Dragon News.png'
import Image from "next/image"

const currentDate = new Date().toDateString();


const Header = () => {
    return (
        <Box>
            <Container className="text-center py-5 space-y-3">
                <Image className="mx-auto" src={newsImg} alt="news image" width={300} height={300} />
                <Typography>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography>
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    )
}

export default Header