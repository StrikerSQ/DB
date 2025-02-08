import getData from './getData';
import postData from './postData';
import db from '../../db/db.json';
const sec = () => {
  const cartBtn = document.querySelector('#cart');
  console.log(`second`);
  getData().then((data) => {
    console.log(data);
  });

  cartBtn.addEventListener('click', () => {
      postData().then((data) => {
        console.log(`work`);
        
        console.log(data);

        getData().then((data) => {
          console.log(data);
        });
      });
    }
  );
};

export default sec;
