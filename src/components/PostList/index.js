import React, { Component } from 'react';
import Post from '../Post/index';
import avatar1 from '../../assets/1.jpg';
import avatar2 from '../../assets/2.jpg';
import avatar3 from '../../assets/3.jpg';
import avatar5 from '../../assets/5.jpg';

class PostList extends Component {
    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Lui",
            avatar: avatar5
          },
          date: "16 Nov 2020",
          content: "Boa tarde pessoal, alguem sabe inserir o path absoluto da imagem nos assets para um estado?",
          comments: [
            {
              id: 2,
              author: {
                name: "Mestre YmaBoy",
                avatar: avatar1
              },
              content: "Eu vi o anexo do seu código, o erro está na classe PostList, aonde o valor da imagem é passado"
            },
            {
                id: 3,
                author: {
                  name: "Lui",
                  avatar: avatar5
                },
                content: "Realmente, nao tinha percebido o erro nos parenteses, só foi retirar que deu tudo certo vlw campeao"
              }
          ]
        },

        {
            id: 4,
            author: {
              name: "DanDan",
              avatar: avatar2
            },
            date: "16 Nov 2020",
            content: "Alguem tem algum link de video aula ou material para conseguir melhorar meu CSS?",
            comments: [
              {
                id: 5,
                author: {
                  name: "VictorBDias",
                  avatar: avatar3
                },
                content: "Mandei inbox, eu tenho mais alguns se precisar"
              },
              {
                  id: 6,
                  author: {
                    name: "VictorBDias",
                    avatar: avatar3
                  },
                  content: "Tenho muitos ainda na fila para estudar"
                },
                {
                    id: 7,
                    author: {
                      name: "VictorBDias",
                      avatar: avatar3
                    },
                    content: "kkk"
                  }
            ]
          },

      ]
    };

    render() {
        const { posts } = this.state;
    
        return (
          <div className="postlist">
            {posts.map(post => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        );
      }
  }

  export default PostList;