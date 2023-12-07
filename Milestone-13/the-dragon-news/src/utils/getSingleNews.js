export const getSingleNews = async (id) => {
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/${id}`)
    return await res.json();
}