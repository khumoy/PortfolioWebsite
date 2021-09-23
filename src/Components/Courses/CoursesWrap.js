import styled from 'styled-components'

export const CoursesWrap = styled.div`
padding-top: 100px;
.courses {
    /* height: 100vh; */
    backdrop-filter: blur(4px);
    padding: 70px 50px 20px;
    img{
        max-height: 178px;
    }
    h2{
        font-weight: 600;
        margin: 15px 0;
    }
    .title{
        font-weight: 500;
        color: black;
        max-width: 350px;
        margin: 5px auto;
    }
}
@media only screen and (max-width: 500px){
.courses{
padding: 70px 10px 20px;
    }
 .title {
     font-size: 15px;
     color: gray;
 }
}
`