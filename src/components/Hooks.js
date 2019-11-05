import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Hooks = () => {
  const [posts, setPosts] = useState([])

  const getData = async () => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  //Aqui no estoy usando this porque no es una clase y solo los metodos llevan algo antes de un punto

  //   useEffect recibe primero un callback que va a ser la funcion que se deifnio para obtener la data y como segundo parametro recibe
  //     un arreglo de lo que tiene que estar vigilando para que cuando cambie vuelva a ejecutar useEffect, sino se pasa ningun parametro, se ejecuta infinitamente
  //  Si paso un arreglo vacio, entonces no vigila nada (por lo tanto la funcion solo se ejecuta una sola vez)

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {posts ? (
        posts.map(post => (
          <article key={post.id}>
            <h2> title:{post.title}</h2>
            <p>post:{post.body}</p>
          </article>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Hooks
