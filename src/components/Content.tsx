import '../styles/Content.css';

interface Props {
  children: any;
}

function Content({ children }: Props) {
  return <div className='container'>
    {children}
  </div>
}

export default Content;