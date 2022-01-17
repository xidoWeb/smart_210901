import React,{useState, useEffect} from 'react';
// import axios from 'axios';
import Styled from 'styled-components';
import '../style/Review.scss';


export default function Review() {
  const [review, setReview] = useState('글자를 입력하세요.');
  const fnReviewChange = (e)=>{  setReview( e.target.value ) };
  
  useEffect( ()=>{
    // console.log( review );
  }, []);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect( async () => {
  //   // const response = await axios.get('./data/dataSample.json');
  //   // const dataResult = await response.data;
  //   // console.log(dataResult);
  // }, [])  
  
  // useState()  : 하나의 내용에서 변경될 내용을 적용하기 위한 API
  // useEffect() : 상태체크(변화시 어떠한 기능을 확인체크), fetching

  return (
    <div className="review_area">
      {/* <form method="POST" action="#">
        <fieldset>
          <legend>리뷰 작성</legend>
          <input id="reviewText" name="review__Text" 
          onChange={fnReviewChange} />
          <p>{review}</p>
        </fieldset>
      </form> */}

      <FormSet method="POST" action="#">
        <Field>
          <Legend>리뷰 작성</Legend>
          <input id="reviewText" name="review__Text" 
          onChange={fnReviewChange} />
          <p>{review}</p>
        </Field>
      </FormSet>
    </div>
  )
}// Review()


const FormSet = Styled.form`
  width:100%; height:auto; min-height:500px; padding:1rem 2rem; margin:1rem auto; border:1px solid #333;
`
const Field = Styled.fieldset`
  width:100%; height:auto; min-height:500px; background-color:#fff;
`
const Legend = Styled.legend`
  width:1px; height:1px; position:absolute; clip:rect(0,0,0,0); overflow:hidden; z-index:-1;
`

