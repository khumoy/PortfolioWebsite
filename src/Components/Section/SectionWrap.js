import styled from 'styled-components'
export const SectionWrap = styled.div` 
.first-section{
        background: url('https://fit.mospolytech.ru/assets/img/programs/09.03.01.01/cover.jpg') ;
        background-size: cover;
        /* background-position: center; */
        background-repeat: no-repeat; 
        height: 90vh;
        width: 100%;
        margin-top: 60px;
        text-align: center;
        
    .text {
        color:  white;
        margin: 80px 10px 30px;
        font-size: 55px;
    }
    .btn-contact {
        padding: 10px 35px;
        background-color: transparent;
        color: white;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 3px;
        border-radius: 15px;
        transition: .4s;
        border: 1px solid yellow;
        
        :hover{
            background-color: black;
            transition: .4s;
            color: yellow;
            border: 1px solid grey;
            transform: scale(1.1);
        }
    } 
}
@media only screen and (max-width: 600px) {
  .text {
    font-size: 40px !important;
  }

}
@media only screen and (max-width: 500px) {
  .first-section{
      background-position: center;
  }
}
`