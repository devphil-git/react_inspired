import { Container } from '../Layout/Container/Container.jsx';
import { Category } from './Category/Category.jsx';
import { Social } from './Social/Social.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Copyright } from './Copyright/Copyright.jsx';
import { Development } from './Development/Development.jsx';
import style from './Footer.module.scss';


export const Footer = ({ list }) => {

  return(
    <footer>
      <Container className={style.container}>
        <Category style={style} list={list}/>
        <Social style={style} />
        <Contacts style={style} />
        <Copyright style={style} />
        <Development style={style} />
      </Container>
    </footer>
  )
};
