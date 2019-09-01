import fetch from 'isomorphic-unfetch'

export default (req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    const { query: {tag} } = req;

    fetch(`https://www.reddit.com/r/${tag}.json`)
        .then(r => r.json())
        .then(data => {
            res.end(JSON.stringify(data));
        });
}
