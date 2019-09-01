import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import api from '../../services/api'

const Buscar = (json) => {

    const { query: { pid } } = useRouter();

    const [posts, setPosts] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    const chamarAPI = async (param) => {
        console.log('dentro ' + param)

        const response = await api.get(`/api/discussions/javascript`);
        console.log(response.data['data'].children);
        setPosts(response.data['data'].children);
    }

    useEffect(() => {
        console.log('pid ' + pid)
        if (pesquisa != pid) {
            setPesquisa(pid);
            chamarAPI(pid);            
        }
    }, [posts]);

    return (
        < div >
            <Head>
                <title>Buscar dinamicamente</title>
            </Head>

            <h3>Buscando no <span>www.reddit.com</span>: {pid}</h3>
            <h3>Qtd. registro localizado: {posts.length}</h3>

            {
                posts.map((post, index) => (
                    <div key={index}>
                        <h4>{post.data.author}</h4>
                        <p>{post.data.selftext}</p>
                    </div>
                ))
            }

        </div >
    )
}

export default Buscar