import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>Article Details</h1>
      <p>{params.articleId}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        id! Odit maiores laudantium fugiat possimus perferendis minus autem
        fugit nulla, corrupti neque magni iste ab excepturi dicta similique
        quos, eveniet expedita? In optio labore, eveniet nisi, recusandae
        voluptatibus excepturi dolor quisquam totam cumque voluptas deserunt
        quis rem explicabo. Reprehenderit quae repudiandae nam commodi ex dicta
        natus autem architecto fugiat cum, sunt obcaecati. Voluptas nulla itaque
        veritatis dignissimos debitis, minus inventore distinctio facilis atque
        recusandae quod quo repellendus asperiores incidunt voluptates aut
        cupiditate molestias sed dolorum reprehenderit, ipsa quis impedit iste.
        Iure qui debitis ipsam impedit quidem officiis dolore in sequi.
      </p>
    </section>
  );
};

export default ArticleDetails;
