export default async (req, res) => {
    const slug = req.query.slug
    const response = await fetch(`https://www.fruityvice.com/api/fruit/${slug}`).then(res => res.json())

    return res.send(response)
}