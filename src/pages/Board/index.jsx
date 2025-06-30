import Card from '../../components/Card/Card.jsx'; // Assuming you have a Card component
import { loginApi } from '../../network/sys.js';
function Board() {

  async function login(){
    const postData = {
      name:'testuser',
      password:'123456'
    }
    const res = await loginApi(postData)
    console.log(res);
  }

  return (
    <Card>
      <button onClick={()=>{login()}}>登录</button>
    </Card>
  );
}

export default Board;