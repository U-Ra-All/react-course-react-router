import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        voluptate alias sit laboriosam illum quas suscipit sequi illo veritatis,
        sint, perspiciatis eveniet voluptatum ipsam. Officiis quo ab odio
        recusandae laboriosam?
      </p>
      <Link to='/contact-us'>Contact Us</Link>
    </section>
  );
};

export default About;
