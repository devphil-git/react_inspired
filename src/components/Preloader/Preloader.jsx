import { Oval } from 'react-loader-spinner';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0',
};

export const Preloader = () => {


  return(
    <div style={styles}>
      <Oval
        height={100}
        width={100} 
        color="#777"
        secondaryColor="#dcdcdc"
      />
    </div>
  )
}