export const getCategoryNews = async (category) => {
    const res = await fetch(`https://the-news-portal-server.vercel.app/news?category=${category}`, {
        cache: "no-store" // in next js always remember to do this else will face problem.
        //  remember the fetching cach method
    })
    return await res.json();
}