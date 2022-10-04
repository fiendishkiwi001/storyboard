import '../styles/Content.css';

interface Props {
  title: string;
  children: any;
}

function Content({ children, title }: Props) {
  return <div className='container'>
    <div className='title'>
      {title}
    </div>
    <div>
      {children}
    </div>
  </div>
  
}

export default Content;