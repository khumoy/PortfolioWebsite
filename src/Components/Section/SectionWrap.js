import styled from 'styled-components'
export const SectionWrap = styled.div`
.first-section{
        background: url('https://wallpaperaccess.com/full/1798975.jpg') ;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat; 
        padding: 100px 0;
        height: 100vh;
        width: 100%;
        color: white;
        text-align: center;
        .titles {
        max-width: 800px;
        }
    .text {
       /* backdrop-filter: blur(5px); */
        color:  black;
        margin: 100px 0;
        font-size: 55px;
    }
    .btn-contact {
        padding: 10px 35px;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 3px;
        border-radius: 15px;
        transition: .4s;
        border: 1px solid transparent;
        
        :hover{
            background-color: white;
            transition: .4s;
            color: black;
            border: 1px solid grey;
            transform: scale(1.1);
        }
    }
.type-style {
     color: red;
    }
}
@media only screen and (max-width: 600px) {
  .text {
    font-size: 40px !important;
  }
  .first-section {
    background: no-repeat   url('https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg');
    margin-top: 0;
    padding-top: 50px;
    background-size: cover;
    /* background-position: left; */
    }

}
@media only screen and (max-width: 500px) {
  .first-section{
      background-position: center;
  }
}
@media (max-height: 500px) {
  .text {
    font-size: 30px !important;
    margin: 60px 10px 30px !important;

  }
}
`