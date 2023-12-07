import { getAllCategories } from "@/utils/getAllCategories"
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories();

    return (
        <Box className="px-5 py-2 bg-gray-200 mt-5 rounded space-y-2">
            <Typography variant="h5">Categories</Typography>
            <Divider />
            <Stack spacing={2}>
                {
                    allCategories?.map(category =>
                        <Button key={category?.id} variant="outlined" >
                            <Link href={`/categories/news?category=${category?.title.toLowerCase()}`} >{category?.title}</Link>
                        </Button>
                    )
                }
            </Stack>
        </Box>
    )
}

export default CategoryList