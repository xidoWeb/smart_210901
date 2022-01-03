// import 'footer.css';

export default function Footer({name}){

  // const props = {name:'xido'};
  const stFoot = {
    width:100+'%', height:'auto', borderTop:'1px solid #333'
  }
  const mySet = name.toUpperCase();

  // -------------------------------
  return (
    <footer id="footBox" style={stFoot}>
        <h2>{mySet} company information</h2>
        <address>
          회사 주소에 대한 내용 작성
        </address>
        <dl>
          <dt>family site</dt>
          <dd>
            <ul>
              <li>site_01</li>
              <li>site_02</li>
              <li>site_03</li>
            </ul>
          </dd>
        </dl>
      </footer>
  )
}